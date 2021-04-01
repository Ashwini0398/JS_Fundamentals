
    //task
    //API student

    //1: 2s roll no;
    //2: 2s name and age;
    //when task completes resolve
    //when task not complete reject

    //executor function 

    //promis produce

    const pobj1 = new Promise((resolve, reject) => {

        setTimeout(() => {
            let roll_no = [1, 2, 3, 4, 5];
            resolve(roll_no);
            // reject('Error while communicating');
        }, 2000);
    });


    const getBioData =(indexdata) =>{
        return new Promise((resolve,reject) =>{

                setTimeout((indexdata) =>{

                    let biodata ={
                        name:"Ashwini",
                        age:24
                    }

                    resolve(`my roll no is ${indexdata} . My name is ${biodata.name} . I  am ${biodata.age} year old`);
                },2000,indexdata);
        });
    }

    //promise consume
    pobj1.then((rollno) => {
        console.log(rollno);
        return getBioData(rollno[1]);
    }).then((something) =>{
        console.log(something);
    }).catch((error) => {
        console.log(error);

    })







