// Basic "Add to Cart" demo (no payments; just a UI behavior)
const cart = [];

function updateCartUI() {
  const countEl = document.querySelector("[data-cart-count]");
  const listEl = document.querySelector("[data-cart-items]");
  if (!countEl || !listEl) return;

  countEl.textContent = String(cart.length);
  listEl.innerHTML = cart.map(item => `<li>${item.name} — ${item.price}</li>`).join("");
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add-to-cart]");
  if (!btn) return;

  const name = btn.getAttribute("data-name") || "Item";
  const price = btn.getAttribute("data-price") || "$0.00";
  cart.push({ name, price });
  updateCartUI();
});

// Contact form validation + safe output (prevents HTML injection)
document.addEventListener("submit", (e) => {
  const form = e.target.closest("#contactForm");
  if (!form) return;

  e.preventDefault();

  const name = form.querySelector("#name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const message = form.querySelector("#message").value.trim();
  const topic = form.querySelector("#topic").value;

  const status = document.querySelector("#formStatus");

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const errors = [];
  if (name.length < 2) errors.push("Name must be at least 2 characters.");
  if (!emailOk) errors.push("Please enter a valid email address.");
  if (message.length < 10) errors.push("Message must be at least 10 characters.");

  if (errors.length) {
    status.textContent = "Fix these: " + errors.join(" ");
    status.className = "notice";
    return;
  }

  // "Process" the form client-side (for assignment rubric)
  status.textContent =
    `Thanks, ${name}. Your ${topic} message was received. We'll reply to ${email}.`;
  status.className = "notice";

  form.reset();
});
