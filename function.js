function fillCarBrand(json) {
    fillSelect('CarBrand', getCarBrand(json));
    $('#CarBrand').trigger('change');
}

function fillCarType(json, car_brand) {
    fillSelect('CarType', getCarType(json, car_brand));
    $('#CarType').trigger('change');
}

function fillCarYear(json, car_brand, car_type) {
    fillSelect('CarYear', getCarYear(json, car_brand, car_type));
    $('#CarYear').trigger('change');
}

function showResult(json, car_brand, car_type, car_year) {
    json.map(function (item, index, array) {
        if (item.car_brand == car_brand && item.car_type == car_type && item.car_year == car_year) {
            $('#Result').html(item.wiper_size + '<br>' + item.wiper_cnet);
        }
    });
}

function getCarBrand(json) {
    var list = [];
    json.map(function (item, index, array) {
        list.push(setNewObj(item.car_brand));
    });
    return removeDupli(list);
}

function getCarType(json, car_brand) {
    var list = [];
    json.map(function (item, index, array) {
        if (item.car_brand == car_brand) {
            list.push(setNewObj(item.car_type));
        }
    });
    return removeDupli(list);
}

function getCarYear(json, car_brand, car_type) {
    var list = [];
    json.map(function (item, index, array) {
        if (item.car_brand == car_brand && item.car_type == car_type) {
            list.push(setNewObj(item.car_year));
        }
    });
    return removeDupli(list);
}

function setNewObj(value){
    var newObj = {
        id: value,
        text: value
    };

    return newObj;
}

// fill data to selection
function fillSelect(id, data) {
    // clear
    $("#" + id).html('').select2();
    // set data
    $("#" + id).select2({
        data: data
    });
}


// remove Duplicate item in array
function removeDupli(arr) {
    var hashTable = {};
    return arr.filter(function (el) {
        var key = JSON.stringify(el);
        var match = Boolean(hashTable[key]);
        return (match ? false : hashTable[key] = true);
    });
}
