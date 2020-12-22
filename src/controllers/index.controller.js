const {Pool} = require('pg');

const pool=new Pool({
    host:'localhost',
    user:'postgres',
    password:'1234',
    database:'firstapi',
    port:'5432'
})

const getUsers = async(req,res)=>{
    const response=await pool.query('select * from users');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

const createUser = async(req,res)=>{
    const {name,email}=req.body;
    const response=await pool.query("insert into users (name,email) values($1,$2)",[name,email]);
    res.status(200).json({
        message:'User added successfully',
        body:{
            user:{name,email}
        }
    });
}

const getUserById = async(req,res)=>{
    const {id}=req.params;
    const response=await pool.query('Select * from users where id=$1',[id]);
    res.status(200).json(
        response.rows
    );
}

const deleteUser=async(req,res)=>{
    const response= await pool.query('delete from users where id=$1',[req.params.id])
    res.status(200).json(`User ${req.params.id} deleted successfully`);
}

const updateUser= async(req,res)=>{
    const id=req.params.id;
    const {name,email}=req.body;
    const response= await pool.query('update users set name=$1, email=$2 where id=$3',[name, email, id]);
    res.status(200).json(`User ${id} updated successfully`);
}

module.exports ={
    getUsers,createUser,getUserById,deleteUser,updateUser
}