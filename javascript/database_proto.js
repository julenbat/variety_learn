import fs from 'node:fs'

const {constants} = fs;
const {O_CREAT, O_RDWR} = constants
/*
* @disclaimer
* Probably the worst database implementation to ever exist
*
*
*
*/

/*
* @typedef {Object} Index
* @property 
*/


const DB_PATH = "./js_database";

/*
* jdb stands for Julens database
*/

if(!fs.existsSync(DB_PATH) || !fs.lstatSync(DB_PATH).isDirectory())fs.mkdirSync(DB_PATH)
const fdIdx =  fs.openSync(DB_PATH + "/index.jdb", O_CREAT | O_RDWR)
const fdData =  fs.openSync(DB_PATH + "/data.jdb", O_CREAT | O_RDWR)




export default  (function(){

	const index_size = fs.fstatSync(fdIdx).size;
	const fdData_size = fs.fstatSync(fdData).size;




	return {
		createIndex: () => 0,
		insert: () => 0,
		delete: () => 0,
		find: () => 0
	}


}());
