
const y=document.querySelector('[data-year]'); if(y)y.textContent=new Date().getFullYear();
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{const c=document.getElementById('menu-check');if(c)c.checked=false;}));
const form = document.getElementById("contactForm");

if (form) {
  const status = document.getElementById("formStatus");
  const button = form.querySelector('button[type="submit"]');

  status.setAttribute("role", "status");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    button.disabled = true;
    status.textContent = "Αποστολή μηνύματος…";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Submission failed");
      }

      status.textContent = "Το μήνυμά σας στάλθηκε επιτυχώς!";
      form.reset();
    } catch (error) {
      status.textContent =
        "Η αποστολή απέτυχε. Παρακαλώ δοκιμάστε ξανά.";
    } finally {
      button.disabled = false;
    }
  });
}
