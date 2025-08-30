import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async() =>{
    //insert user
    // const user = await prisma.user.create({
    //     data:{
    //         name :"ritik",
    //         email:"negir@gmail.com",
    //     }
    // })
    // console.log(user)

    //multiple user 
//    const newUsers = await prisma.user.createMany({
//         data:[
           
//             { name :"arun",email:"arun@gmail.com"},
//             { name :"anikesh",email:"anikesh@gmail.com"},
//         ]
//     })
//     console.log(newUsers)



//Get all users
// const users = await  prisma.user.findMany();
// console.log(users)


// get a single id of user
// const user = await prisma.user.findUnique({
//     where :{id:4 },
// })
// console.log(user);

//update one user
// const updatedUser = await prisma.user.update({
//     where:{id:4}, // only unique field allowed
//     data :{name:"rkn"}
// })
//this will work for non uniqefields 
// const updatedUser = await prisma.user.updateMany({
//     where:{name:"rkn"}, 
//     data :{email:"rkn@gmail.com"}
// })
// console.log(updatedUser)

//DELETE
//one
// const deleteUser = await prisma.user.delete({
//     where:{id:12},
// })

//many
const deleteUser = await prisma.user.deleteMany({
    where:[{id:6},{id:5}],
})
}


main().catch((e)=> console.error(e)).finally(async()=>{
    await prisma.$disconnect();
})