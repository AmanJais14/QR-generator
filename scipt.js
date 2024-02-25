let imageBox = document.getElementById("imageBox");
        let qrImg = document.getElementById("qrImg");
        let inputText = document.getElementById("inputText");

        function generateQR() {
            if(inputText.value.length > 0) {
                qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
                imageBox.classList.add("show-img");
            }else {
                inputText.classList.add("error");
                setTimeout(() => {
                    inputText.classList.remove("error");
                },1000);
            }
        }