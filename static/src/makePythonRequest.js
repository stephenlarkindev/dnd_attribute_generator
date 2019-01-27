function makePythonRequest() {
  $.ajax({
    type: "get",
    url: "./api/dice_roller.py",
    cache: false,
    async: "asynchronous",
    dataType: "json",
    success: function(data) {
      console.log(JSON.stringify(data));
    },
    error: function(request, status, error) {
      console.log("Error: " + error);
    }
  });
}

$("#requestBtn").click(makePythonRequest);
