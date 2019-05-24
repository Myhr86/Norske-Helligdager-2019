fetch("https://webapi.no/api/v1/holidays/2019")
.then(result2 => result2.json())
.then((res2) => {
createHolidays(res2);
})
.catch(err => console.log(err))

function createHolidays(result2) {
  var myContainer = document.getElementById("container");
  for (var i = 0; i < result2.data.length; i++) {
    var theResult = result2.data[i].date;
    var boxDiv = document.createElement("div");
    boxDiv.classList.add("boxDiv");

    var h4 = document.createElement("h4");
    var h4Text = "Dato: ";
    h4.append(h4Text);
    h4.append(theResult.replace("T00:00:00", " "));
    boxDiv.append(h4);
    myContainer.append(boxDiv);

    var theResult = result2.data[i].description;
    var p = document.createElement("p");
    var pText = "Helligdag: ";
    p.append(pText);
    p.append(theResult);
    boxDiv.append(p);
    myContainer.append(boxDiv);

    //var hr = document.createElement("hr");
    //myContainer.append(hr);
    }

    /*var id = (result.cards[i].id);
    var a = document.createElement("a");
    var linkText = "View More";
    var cardSpecific = "card-specific.html?id="
    a.append(linkText);
    a.classList = ("btn btn-success");
    a. href = cardSpecific + id;
    myContainer.append(a);*/
}
