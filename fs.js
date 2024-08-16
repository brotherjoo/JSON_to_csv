const fs = require("fs");
const low_data = require("./train_original_low.json");
const editorial_data = require("./train_original_editorial.json");
// const news_data = require("./train_original_news.json")

JSON_FILE = [];

low_data.documents.forEach((x) => {
    JSON_FILE.push({
        sentence: x.abstractive[0],
        case: 1,
    });
});

editorial_data.documents.forEach((x) => {
    JSON_FILE.push({
        sentence: x.abstractive[0],
        case: 0,
    });
});

fs.writeFile("data_sample_train.json", JSON.stringify(JSON_FILE), (err) => console.log(err));

// let add_list = [];
// let data = ",case,sentence\n";

// console.log("start");

// low_data.documents.forEach((x) => {
//     add_list.push(x.abstractive[0]);
// });

// for(let i = 0; i < add_list.length; i++){
//     data_temp = String(i) + ',' + "1" + "," + add_list[i] + "\n";
//     data += data_temp;
// }

// add_list = [];

// editorial_data.documents.forEach((x) => {
//     add_list.push(x.abstractive[0]);
// });

// for(let i = 0; i < add_list.length; i++){
//     data_temp = String(i) + ',' + "0" + "," + add_list[i] + "\n";
//     data += data_temp;
// }

// fs.writeFile("data_sample_train.csv", data, {encoding:"utf8"},(err) => console.log(err));
