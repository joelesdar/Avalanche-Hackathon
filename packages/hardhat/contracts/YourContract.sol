// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract YourContract is ERC20, AccessControl {
    bytes32 constant private MINTER = keccak256(abi.encodePacked("MINTER")); 
    bytes32 constant private BURNER = keccak256(abi.encodePacked("BURNER")); 

    uint256 constant public INITIALSUPPLY = 100_000_000_000;
    uint256 public holders;
    address public airdrop;

    constructor(address _airdrop, address _minterAddress, address _burnerAddress) ERC20("Action", "ACT") {
        if(_minterAddress == address(0)) revert ZeroAddressNotAllowed();
        if(_burnerAddress == address(0)) revert ZeroAddressNotAllowed();
        _grantRole(MINTER, _minterAddress);  
        _grantRole(BURNER, _burnerAddress); 
        airdrop = _airdrop;
        _mint(airdrop, INITIALSUPPLY*10**decimals());
    }

    error ZeroAddressNotAllowed();
    
    function mint(uint256 amount) onlyRole(MINTER) public { 
        _mint(airdrop, amount);
    }

    function burn(uint256 amount) onlyRole(BURNER) public {
        _burn(airdrop, amount*10**decimals());
    }

    function _update(address from, address to, uint256 value) internal override virtual { 
        if(balanceOf(to) == 0) {
            holders += 1;
        }
        if(balanceOf(from) == value) {
            holders -= 1;
        }
        super._update(from, to, value);
    }


}
