let register = async () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let DOB = document.getElementById("DOB");
    // let profile = document.getElementById("profile");
    // let image = await uploadFiles(profile.files[0]);
    var result = document.getElementById("selType");
    let loaderText = document.getElementById("loaderText");

    let loader = document.getElementById("loader");
    loaderText.style.display = "none";
    loader.style.display = "block"

    if (result.value === "Customer") {
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((res) => {
                firebase.database().ref(`users/${res.user.uid}`).set({
                    type: result.value,
                    username: username.value,
                    email: email.value,
                    password: password.value,
                    DOB: DOB.value,
                    // profile: image

                })

                    .then(() => {

                        // var user = res.user;
                        // console.log("user==>" , user)

                        let successDiv = document.getElementById("successDiv");
                        successDiv.innerHTML = " User register succesfully";
                        successDiv.style.display = "block"
                        username.value = "";
                        email.value = "";
                        password.value = "";
                        errorDiv.style.display = "none";
                        loaderText.style.display = "block"
                        loader.style.display = ("none")

                        setTimeout(() => {
                            window.location = "login.html"
                        }, 1000)

                    })
                    .catch((err) => {

                        // var errorMessage = err.message;
                        // console.log(err)
                        let errorDiv = document.getElementById("errorDiv");
                        errorDiv.innerHTML = " err.message";
                        errorDiv.style.display = "block"
                        loaderText.style.display = "block"
                        loader.style.display = ("none")
                    });
            })

    }
    else {
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((res) => {
                firebase.database().ref(`admin/${res.user.uid}`).set({
                    type: result.value,
                    username: username.value,
                    email: email.value,
                    password: password.value,
                    DOB: DOB.value,
                    //   profile: image

                })

                    .then(() => {

                        // var user = res.user;
                        // console.log("user==>" , user)

                        let successDiv = document.getElementById("successDiv");
                        successDiv.innerHTML = " User register succesfully";
                        successDiv.style.display = "block"
                        username.value = "";
                        email.value = "";
                        password.value = "";
                        errorDiv.style.display = "none";
                        loaderText.style.display = "block"
                        loader.style.display = ("none")

                        setTimeout(() => {
                            window.location = "login.html"
                        }, 1000)

                    })
                    .catch((err) => {

                        // var errorMessage = err.message;
                        // console.log(err)
                        let errorDiv = document.getElementById("errorDiv");
                        errorDiv.innerHTML = err.message;
                        errorDiv.style.display = "block"
                        loaderText.style.display = "block"
                        loader.style.display = ("none")
                    });
            })

    }

}

function login() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    var result1 = document.getElementById("selType1");
    let loaderText = document.getElementById("loaderText");
    let loader = document.getElementById("loader");
    loaderText.style.display = "none";
    loader.style.display = "block"

    // if(result1.value==="Customer")
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {

            // console.log("user==>" ,res.user.uid)

            var user = res.user;

            let successDiv = document.getElementById("successDiv");
            successDiv.innerHTML = " User Login succesfully";
            successDiv.style.display = "block"

            email.value = "";
            password.value = "";

            errorDiv.style.display = "none";
            loaderText.style.display = "block"
            loader.style.display = ("none")

            setTimeout(() => {
                window.location = "../../index.html"
            }, 1000)

        })
        .catch((error) => {
               // var errorMessage = err.message;
                        // console.log(err)
            var errorMessage = "error.message";
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = err.message;
            errorDiv.style.display = "block"
            loaderText.style.display = "block"
            loader.style.display = ("none")


        });
}

let logOut = () => {
    firebase.auth().signOut().then(
        () => {
            window.location = "signup.html"
        }
    )
}


let enter = () => {

}