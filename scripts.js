const contentContainer = document.getElementById("content-container");
const getDataButton = document.getElementById("get-data-button");
const clearDataButton = document.getElementById("clear-data-button");

const maxEventDisplay = 12;

const getData = async () => {
  const dataResponse = await fetch("https://www.gov.uk/bank-holidays.json");
  const data = await dataResponse.json();

  data["england-and-wales"].events.forEach((event, index) => {
    if (index < maxEventDisplay) {
      const eventText = document.createElement("p");
      eventText.innerHTML = event.title + ": " + event.date;
      eventText.classList.add("event-text");
      contentContainer.appendChild(eventText);
    }
  });
};

getDataButton.onclick = getData;

const clearData = () => {
  contentContainer.innerHTML = "";
};

clearDataButton.onclick = clearData;
