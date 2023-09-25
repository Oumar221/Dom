document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalAmount = document.getElementById("total-amount");

    cartItems.forEach(item => {
        const increaseButton = item.querySelector(".increase");
        const decreaseButton = item.querySelector(".decrease");
        const quantitySpan = item.querySelector(".quantity span");
        const removeButton = item.querySelector(".remove");
        const likeButton = item.querySelector(".like");

        let quantity = parseInt(quantitySpan.textContent);

        // Augmenter la quantité
        increaseButton.addEventListener("click", function() {
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotal();
        });

        // Diminuer la quantité
        decreaseButton.addEventListener("click", function() {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotal();
            }
        });

        // Supprimer l'article
        removeButton.addEventListener("click", function() {
            item.remove();
            updateTotal();
        });

        // Aimer l'article
        likeButton.addEventListener("click", function() {
            likeButton.classList.toggle("liked");
        });
    });

    // Fonction pour mettre à jour le total
    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector(".quantity span").textContent);
            const price = 10; // Prix de l'article, à ajuster selon vos besoins
            total += quantity * price;
        });
        totalAmount.textContent = total;
    }
});
