if (localStorage){
    $(document).ready(function() {
        $(".save").click(function() {
            var username = $(".name").val();
            var password = $(".password").val();
            
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            
            alert("Your login details have been saved.");     
        });
            
            $("#access").click(function() {
            
            $(".name2").text(localStorage.getItem("username"));
            $(".password2").text(localStorage.getItem("password"));
        });
    });
}

