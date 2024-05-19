// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

contract Back  {
    uint public nextId;
    Metas metasStruct;

    struct Metas{
        string[] tareas;
        bool[] tareaCumplida;
        bool cumplida;
    }

    constructor() {
        nextId = 1;
    }
    
    // function initializeMetas() internal pure returns (Metas memory) {
    //     string[] memory tareas = new string[];
    //     bool[] memory cumplidas = new bool[];
    //     return Metas({
    //         tareas: tareas,
    //         tareaCumplida: cumplidas,
    //         cumplida: false
    //     });
    // }

    

    struct Usuario{
        uint id;
        string nombre;
        uint8 edad; 
        Metas[] metas;
    }

    // Usuarios por address
    mapping(address => Usuario) public usuarios;

    function addTarea(string calldata _tarea) public {
        uint256 total = usuarios[msg.sender].metas.length;
        usuarios[msg.sender].metas[total].tareas.push("");
        usuarios[msg.sender].metas[total].tareaCumplida.push(false);
    }

    function registrarUsuario(string calldata name, uint8 age, string calldata tarea) public {
        require(usuarios[msg.sender].id == 0, "Usuario ya registrado");
        usuarios[msg.sender].id = nextId;
        usuarios[msg.sender].nombre = name;
        usuarios[msg.sender].edad = age;
        nextId++;
    }

    function agregarMeta() public {
        Metas memory nuevaMeta;
        nuevaMeta.cumplida = false;
        usuarios[msg.sender].metas.push(nuevaMeta);
    }
}