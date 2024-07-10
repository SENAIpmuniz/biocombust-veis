var json = [
    {
        "id": 146,
        "text": "trading-platform",
        "position": "",
        "children": [

        ]
    },
    {
        "id": 160,
        "text": "user-deposit",
        "position": "",
        "children": [

        ]
    },
    {
        "id": 140,
        "text": "toroptions",
        "position": "",
        "children": [
            {
                "id": 251,
                "text": "testimonial",
                "position": "",
                "children": [

                ]
            }
        ]
    },
    {
        "id": 142,
        "text": "legal",
        "position": "",
        "children": [
            {
                "id": 162,
                "text": "toroptions-privacy-policy",
                "position": "",
                "children": [

                ]
            },
            {
                "id": 158,
                "text": "terms-and-conditions",
                "position": "",
                "children": [

                ]
            },
            {
                "id": 155,
                "text": "disclaimer",
                "position": "",
                "children": [

                ]
            },
            {
                "id": 163,
                "text": "client-account-terms-and-conditions",
                "position": "",
                "children": [

                ]
            }
        ]
    }
]


createList(json);
function createList(array) {
    var ul = document.createElement('ul');
    var body = document.querySelector('body');
    array.forEach(function (item) {
        for (var data in item) {
            var li = document.createElement('li');
            body.appendChild(ul);
            ul.appendChild(li);
            if (typeof (item[data]) == 'string' || typeof (item[data]) == 'number') {
                li.appendChild(document.createTextNode(item[data]));
            }
        }
        if (item.children.length > 0) {
            createList(item.children)
        }
    });
}




