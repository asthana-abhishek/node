var myArray =  [
        {
            "pricing_payment_milestone_id": "1346d721-ebc6-486e-89ef-4c0ae627c63b",
            "milestone_title": "Milestone 1",
            "milestone_description": "milestone 1 ",
            "expected_payment_date": "2022-09-21",
            "milestone_amount": 200000
        },
        {
            "pricing_payment_milestone_id": "8f7ae0a3-3e75-4842-aca5-06c0281a5981",
            "milestone_title": "milestone 3",
            "milestone_description": "milestone 3",
            "expected_payment_date": "2022-10-10",
            "milestone_amount": 165394
        },
        {
            "pricing_payment_milestone_id": "c525231c-2e03-4011-9c44-7c9aed80a420",
            "milestone_title": "",
            "milestone_description": "Milestone 2",
            "expected_payment_date": "2022-09-29",
            "milestone_amount": 150000
        }
    ];

const milestone_title_status = myArray.map(items => {
    if(!items.milestone_title || items.milestone_title==''){
        return false;
    }else{
        return true;
    }
});

console.log(milestone_title_status);