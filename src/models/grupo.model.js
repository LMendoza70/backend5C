import db from '../config/DB.js'

export const getAllGroups = async ()=>{
    const [rows] = await db.query('SELECT * FROM grupos WHERE activo = 1')
    return rows
}

export const getGroupById = async (id)=>{
    const [rows] = await db.query('SELECT * FROM grupos WHERE activo=1 AND id_grupo= ? ',[id])
    return rows[0]
}

export const createGrupo = async ({ nombre_grupo, descripcion,activo }) => {
  const [result] = await db.query(
    'INSERT INTO grupos (nombre_grupo, descripcion, activo) VALUES (?,?,?)',
    [nombre_grupo, descripcion||null,activo||null]
  );
  return { id: result.insertId, nombre_grupo, descripcion,activo };
};