class PageController {
    constructor() {

        //Show warning message before leaving site
        //window.onbeforeunload = function () {
        //    return '';
        //}


        //Login Page
        $(document).ready(function () {
            document.getElementById("username").focus();

            $("#view_button").bind("mousedown touchstart", function () {
                $("#password").attr("type", "text");
            }), $("#view_button").bind("mouseup touchend", function () {
                $("#password").attr("type", "password");
            });
        });
        function valUsername() {
            if (document.getElementById("username").value.trim() === "" && document.getElementById("username").value !== null) {
                $('#responseFail').val('');
                $('#username').val('');

                // $("#above").addClass('hidden');
                $('#message').css('color', 'red');
                $('#message').html('Please enter your username');

                $('input:text').focus(
                    function () {
                        $(this).css({ 'border-color': 'red' });
                        $(this).css({ 'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #f15f5f' });
                    });

                $('input:text').blur(
                    function () {
                        $(this).css({ 'border-color': '#ccc' });
                        $(this).css({ 'box-shadow': 'none' });
                    });

                $('#username').css({ 'border-color': 'red' });
                $('#username').css({ 'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #f15f5f' });
                document.getElementById("username").focus();
                return false;
            }
            else {
                var name = $('#username').val();
                if (name == "admin" || name == "Admin" || name == "ADMIN") {
                    //$("#above").removeClass('hidden');
                    $('#message').html('');
                    $('input:text').focus(
                        function () {
                            $(this).css({ 'border-color': 'red' });
                            $(this).css({ 'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #f15f5f' });
                        });
                    document.getElementById("username").focus();
                    $('#responseFail').css({ 'color': 'red' });
                    $('#responseFail').text('You have entered invalid username');

                }
                else {
                    $('#responseFail').css({ 'color': '#555' });
                    $('#responseFail').text('Enter the password for ' + name);

                    $("#first").addClass('hidden');
                    //  $("#above").addClass('hidden');
                    $("#first1").addClass('hidden');
                    $("#first2").addClass('hidden');
                    $("#first3").addClass('hidden');//to hide

                    // $("#myId").removeClass('hidden');	//to show
                    $("#myId1").removeClass('hidden');
                    $("#myId2").removeClass('hidden');
                    $("#myId3").removeClass('hidden');
                    $("#myId4").removeClass('hidden');

                    $("#myId8").removeClass('hidden');
                    $('#message').html('');
                    // $('#message1').html('');

                    $('input:password').focus(
                        function () {
                            $(this).css({ 'border-color': '#66afe9' });
                            $(this).css({ 'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)' });
                        });
                    $('input:password').blur(
                        function () {
                            $(this).css({ 'border-color': '#ccc' });
                            $(this).css({ 'box-shadow': 'none' });
                        });

                    $('Response').html('Enter the password for');
                    document.getElementById("password").focus();
                }
            }
        }
        function prevPage() {
            $('#message').html('');
            // $('#message1').html('');
            $('#password').val('');
            $('#responseFail').val('');

            $("#first").removeClass('hidden');
            $("#first1").removeClass('hidden');
            $("#first2").removeClass('hidden');
            $("#first3").removeClass('hidden');//to hide

            //$("#myId").addClass('hidden');	//to show
            $("#myId1").addClass('hidden');
            $("#myId2").addClass('hidden');
            $("#myId3").addClass('hidden');
            $("#myId4").addClass('hidden');

            $("#myId8").addClass('hidden');
            $('#ajaxResponse').css('color', '#555');
            $('input:text').focus(
                function () {
                    $(this).css({ 'border-color': '#66afe9' });
                    $(this).css({ 'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)' });
                });
            $('input:text').blur(
                function () {
                    $(this).css({ 'border-color': '#ccc' });
                    $(this).css({ 'box-shadow': 'none' });
                });

            // document.getElementById("username").blur();// to remove auto focus on usename after back is clicked
            document.getElementById("username").focus();
        }
        function loginStatus() {
            alert("This is a demo login application");
            return false;
        }
        //End Login Page

        //Registration Page
        $(document).ready(function () {
            $("#view_button3").bind("mousedown touchstart", function () {
                $("#password").attr("type", "text");
            }), $("#view_button3").bind("mouseup touchend", function () {
                $("#password").attr("type", "password");
            }), $("#view_button4").bind("mousedown touchstart", function () {
                $("#verifypassword").attr("type", "text");
            }), $("#view_button4").bind("mouseup touchend", function () {
                $("#verifypassword").attr("type", "password");
            });
        });
        function passwordChecker() {
            $('#verifypassword').val('');
            $('#message1').html(''); $('#message8').html(''); $('#message10').html('');
            $('#message').html(''); $('#message2').html(''); $('#message3').html(''); $('#message4').html(''); $('#message5').html(''); $('#message6').html(''); $('#message7').html('');
            if ($('#password').val().length >= 4) {
                if (newValPassPoilcy() === true) {
                    $('#message').css('color', 'green');
                    $('#message').html('Although looks like a good password, try to make it stronger');
                    if ($('#password').val().length >= 9) {
                        $('#message').html('');
                        $('#message1').html('');
                    }
                    return true;
                }
            }
        }
        function NumAndWordRep() {
            var password = $('#password').val().toLowerCase();
            if (password.match(/(.)\1\1/)) {
                //	alert("Your Password cannot contain Character or Number repetition");
                $('#message7').css('color', 'red');
                $('#message7').html('Your Password cannot contain character or number repetition.');
                return false;
            }
            return true;
        }
        function userNameAsPass() {
            var password = $('#password').val().toLowerCase();
            var uname = $('#username').val().toLowerCase();
            var uname1 = new RegExp(uname);

            if (null !== uname && '' !== uname) {
                if (uname1.test(password)) {

                    $('#message6').css('color', 'red');
                    $('#message6').html('Your Password cannot contain your Username.');
                    return false;
                }
            }
            else {
                $('#message6').html('');
                $('#message10').css('color', 'red');
                $('#message10').css('font-weight', 'bold');
                $('#message10').html('Please enter your username first !!');
                return false;
            }
            return true;
        }
        function newValPassPoilcy() {

            var password = $('#password').val();
            if (!password.match(/^(?=.{6,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&_+=\\*\\-\\(\\)\\{\\}\\:\\;\\<\\>\\|\\,\\.\\?\\/\\'\\"]).*$/) || userNameAsPass() === false || NumAndWordRep() === false) {

                $('#message8').css('color', 'red');
                $('#message8').html('Your password must contain:-');
                if (!password.match(/^(?=.{6,}).*$/)) {
                    $('#message').css('color', 'red');
                    $('#message').html(' - minimum 6 characters.');

                }
                if (!password.match(/^(?=.*[0-9]).*$/)) {
                    $('#message2').css('color', 'red');
                    $('#message2').html(' - at least 1 Number.');

                }
                if (!password.match(/^(?=.*[a-z]).*$/)) {
                    $('#message3').css('color', 'red');
                    $('#message3').html(' - at least 1 Lowercase character.');

                }
                if (!password.match(/^(?=.*[A-Z]).*$/)) {
                    $('#message4').css('color', 'red');
                    $('#message4').html(' - at least 1 Uppercase character.');

                }
                if (!password.match(/^(?=.*[!@#$%^&_+=\\*\\-\\(\\)\\{\\}\\:\\;\\<\\>\\|\\,\\.\\?\\/\\'\\"]).*$/)) {

                    $('#message5').css('color', 'red');
                    $('#message5').html('	- at least 1 Special character.');

                }
                if (userNameAsPass() === false) {
                    if (password.match(/^(?=.{6,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&_+=\\*\\-\\(\\)\\{\\}\\:\\;\\<\\>\\|\\,\\.\\?\\/\\'\\"]).*$/)) {
                        $('#message8').html('');
                    }

                }
                if (NumAndWordRep() === false) {
                    if (password.match(/^(?=.{6,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&_+=\\*\\-\\(\\)\\{\\}\\:\\;\\<\\>\\|\\,\\.\\?\\/\\'\\"]).*$/)) {
                        $('#message8').html('');
                    }

                }
                return false;
            }
            else {

                return true;
            }
        }
        function submitForm() {

            if (document.getElementById("username").value.trim() === "" && document.getElementById("username").value !== null) {
                $('#message1').css('color', 'red');
                $('#message1').html('Please enter a username');
            }
            else if (document.getElementById("yourEmail").value.trim() === "" && document.getElementById("yourEmail").value !== null) {
                $('#message1').css('color', 'red');
                $('#message1').html('Please enter your Email ID');
            }
            else if (checkEmail() === false) {
                $('#message1').css('color', 'red');
                $('#message1').html('Enter a valid Email address');

            }
            else if (document.getElementById("password").value.trim() === "" && document.getElementById("password").value !== null) {
                $('#message1').css('color', 'red');
                $('#message1').html('Please enter your Password');
            }
            else if (document.getElementById("verifypassword").value.trim() === "" && document.getElementById("verifypassword").value !== null) {
                $('#message1').css('color', 'red');
                $('#message1').html('Please confirm your password');
            }

            else {
                var password = $('#password').val();
                var confirm = $('#verifypassword').val();
                if (password == confirm) {
                    $('#message1').css('color', 'green');
                    $('#message1').html('Success! You have reached the end of this demo application');

                }
                else {
                    $('#message1').css('color', 'red');
                    $('#message1').html('Confirm password and password must be same');
                    return false;

                }
                return true;
            }
        }
        function checkEmail() {
            var email = $('#yourEmail').val();
            if ((email.indexOf(".") > 2) && (email.indexOf("@") > 0)) {
                return true;
            }
            else {
                return false;
            }
        }
        //End Registration Page


        //Shopping Cart
        //angular.module('myApp').controller('myCtrl', ['$scope', '$http', 'ngCart', function ($scope, $http, ngCart) {
        //    ngCart.setTaxRate(7.5);
        //    ngCart.setShipping(2.99);
        //}]);


    }
}