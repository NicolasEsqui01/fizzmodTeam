const intialState = {
  sessions: [{
        "items": [
            {
                "id": "E43F4455112D4C5480A441C61CE3E62C",
                "orderId": "5f04ef08cfc61b0007429158",
                "name": "Batidora Artisan KSM15WH",
                "refId": "KSM15WH",
                "ean": "2345897056432",
                "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200411-100-100/batidora_artisan.png?v=636791814171370000",
                "purchasedQuantity": 1,
                "purchasedPrice": 600,
                "status": "picked",
                "groupIndex": 0,
                "pickedEans": [
                    "2345897056432"
                ],
                "pickedQuantity": 1,
                "pickerId": "5f04eb0d57c1140008738851"
            }
        ],
        "complete": true,
        "status": "picked",
        "totalProducts": 1,
        "totalItems": 1,
        "dateCreated": "2020-07-07T21:54:32.858Z",
        "dateModified": "2020-07-07T21:57:08.811Z",
        "startPickingTime": "2020-07-07T21:56:56.563Z",
        "token": "c0e2d150d76ea80705df1ea3a5315be5",
        "userModified": "5f04bbb16cda968edc7a4601",
        "endPickingTime": "2020-07-07T21:57:08.810Z",
        "totalItemsMissing": 0,
        "totalItemsPicked": 1,
        "totalProductsPicked": 1,
        "id": "5f04ef1803492900078060c3"
    },
    {
        "items": [
            {
                "id": "D075177E2BC1487F82B2722880BC1C8C",
                "orderId": "5f0507cbf523290008bd7a54",
                "name": "Ketchup Heinz 397g Top Down",
                "refId": "4534",
                "ean": "1274859678973",
                "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200377-100-100/heinz-ketchup.jpg?v=636613011555500000",
                "purchasedQuantity": 1,
                "purchasedPrice": 99,
                "status": "pending",
                "groupIndex": 0
            },
            {
                "id": "953FC8BC874B4F76886B1D20F94908C8",
                "orderId": "5f0507cbf523290008bd7a54",
                "name": "Remera Roja S",
                "refId": "546454353",
                "ean": "2754326789054",
                "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200455-100-100/remera-roja.jpg?v=637040562408330000",
                "purchasedQuantity": 1,
                "purchasedPrice": 1100,
                "status": "pending",
                "groupIndex": 0
            },
            {
                "id": "26C3D0FBEDA049A8BB74589CE689B351",
                "orderId": "5f0507cbf523290008bd7a54",
                "name": "Batidora Artisan KSM15WH",
                "refId": "KSM15WH",
                "ean": "2345897056432",
                "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200411-100-100/batidora_artisan.png?v=636791814171370000",
                "purchasedQuantity": 1,
                "purchasedPrice": 600,
                "status": "pending",
                "groupIndex": 0
            },
            {
                "id": "D17F115BEA634C9CAE40971EF5FF2A42",
                "orderId": "5f0507cbf523290008bd7a54",
                "name": "Remera Roja M",
                "refId": "546454353-M",
                "ean": "2754326789054",
                "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200456-100-100/remera-roja.jpg?v=637040562412500000",
                "purchasedQuantity": 1,
                "purchasedPrice": 1300,
                "status": "pending",
                "groupIndex": 0
            },
            {
                "id": "0E141280BA2F4A49BF95400050D1B31C",
                "orderId": "5f0507cbf523290008bd7a54",
                "name": "Atma Pava Eléctrica PE5800E",
                "refId": "PE5800E",
                "ean": "5678930212647",
                "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200381-100-100/pava_electrica.jpg?v=636613013074970000",
                "purchasedQuantity": 1,
                "purchasedPrice": 5490,
                "status": "pending",
                "groupIndex": 0
            }
        ],
        "complete": true,
        "status": "pending",
        "totalProducts": 5,
        "totalItems": 5,
        "dateCreated": "2020-07-07T23:40:08.149Z",
        "dateModified": "2020-07-13T17:12:39.696Z",
        "pickerId": "5f04bbb16cda968edc7a4601",
        "userModified": "5e8200e9cd4b8faecc88c17d",
        "id": "5f0507d88459ab000839154e"
    },
    {
        "items": [
            {
                "id": "47A647E176C3442092058D869F130C0A",
                "orderId": "5f0507cbe92f710007ae24d8",
                "name": "Iphone X 256gb",
                "refId": "iPhone X",
                "ean": "9870009654327",
                "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200370-100-100/Apple-iPhoneX.jpg?v=636613009845330000",
                "purchasedQuantity": 1,
                "purchasedPrice": 27500,
                "status": "pending",
                "groupIndex": 0
            }
        ],
        "complete": true,
        "status": "pending",
        "totalProducts": 1,
        "totalItems": 1,
        "dateCreated": "2020-07-07T23:40:08.156Z",
        "id": "5f0507d89bc425000713e6de"
    },
]};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case "GET_SESSIONS":
      return { ...state, sessions: action.sessions };

    default: return state;
  }
}
