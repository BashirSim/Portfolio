var form = document.getElementById("my-form");
// console.log(form);
async function handleSubmit(event) {
  event.preventDefault();
  // var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  console.log(data);
  fetch(event.target.action, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      // status.innerHTML = "Thanks for your submission!";
      // console.log("Thank you for your submission", response);
      form.reset();
    })
    .catch((error) => {
      // status.innerHTML = "Oops! There was a problem submitting your form";
      // console.log("Oops! There was a problem submitting your form", error);
    });
}
form.addEventListener("submit", handleSubmit);
