(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        let html =
          "<table><tr><th>userId</th><th>id</th><th>title</th><th>body</th></tr>";
        array.forEach((item) => {
          html +=
            "<tr>" +
            "<td>" +
            item.userId +
            "</td>" +
            "<td>" +
            item.id +
            "</td>" +
            "<td class='title'>" +
            item.title +
            "</td>" +
            "<td class='body'>" +
            item.body +
            "</td>" +
            "</tr>";
        });
        html += "</table>";
        answer.innerHTML = html;
      });
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
