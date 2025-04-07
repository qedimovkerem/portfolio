// ? task 1
// let date=new Date();
// date=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
// alert(date);
// console.log(date);

// ? task 2

// const employee = {
//     name: "Farid Ali",
//     department: "Engineering",
//     contact: {
//       email: "farid.ali@example.com",
//       phone: "555-1234",
//       emergencyContact: {
//         names: "Far For",
//         relation: "Spouse"
//       }
//     }
//   };
//   let ad={name,department,contact:{email}}=employee;
//   let number={contact:{phone},contact:{emergencyContact:{names}},contact:{emergencyContact:{relation}}}=employee;
//   console.log(`name:${names},department:${department},email ${email}`);
//   console.log(`phone:${phone},emergencyContactName:${name},emergencyRelation:${relation}`);
  
  
//? task 3

// const apiResponse = [
//     {
//       id: 1,
//       title: "JavaScript əsaslari",
//       author: "Səid Məmmədov",
//       stats: [2500, 150, 30] 
//     },
//     {
//       id: 2,
//       title: "Array Destructuring",
//       author: "Leyla Əliyeva",
//       stats: [1800, 220, 45]
//     },
//     {
//       id: 3,
//       title: "Müasir JavaScript",
//       author: "Tural Həsənli",
//       stats: [3200, 380, 70]
//     }
//   ];
// !  task 3-1
//   let [,num2,]=apiResponse;
//   console.log(num2);

// ! task 3-2
// let [num1,num2,num3]=apiResponse;
// console.log(num1.stats,num2.stats,num3.stats);

// ! task 3-3

// let [,num2,]=apiResponse;
// let {title,author,stats}=num2;
// let [stats1,stats2,stats3]=stats;
// console.log(`meqale:${title},Muellif:${author},stats:${stats1} oxunma,${stats2}beyenme,${stats3}serh`);



//   ? task 4

function renderUserProfile(funksiya){
    return{
        username:funksiya.user?.username?? "qonaq",
        avatar:funksiya.profile?.avatar??  "/default-avatar.png",
        bio:funksiya.profile?.bio?? "melumat yoxdur",
        email:funksiya.contact?.email??"teyin edilmeyib",
        premium:funksiya.account?.premium?? false,
    };
}

console.log(renderUserProfile({
  user: {
    username: "tahir2023",
    profile: {
      avatar: "/users/tahir.jpg",
      bio: "JavaScript developer",
    },
    contact: {
      email: "tahir@example.com"
    },
    account: {
      premium: true
    }
  }
}));

console.log(renderUserProfile({
  user: {
    username: "aynur",
    profile: {
      bio: ""
    },
    contact: {}
  }
}));

console.log(renderUserProfile({
  user: {
    username: null
  }
}));

console.log(renderUserProfile({}));
