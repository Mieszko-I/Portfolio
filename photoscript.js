const modal = document.querySelector("#myModal");
        const modalImg = document.querySelector("#img01");
        const captionText = document.querySelector("#caption");
        const images = document.querySelectorAll("img").forEach((img) =>
            img.addEventListener("click", function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            })
        );
        const span = document
            .querySelector(".close")
            .addEventListener("click", function() {
                modal.style.display = "none";
            });
