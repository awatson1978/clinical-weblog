Meteor.publish('posts', function () {
  return Posts.find();
});


Meteor.startup(function () {
  if ((Posts.find().count() === 0)) {
    console.log('No records in Posts collection.  Initializing some data.');

    // and add some data
    var data = [
        {
            "isActive": false,
            "title": "Laborum do officia veniam do.",
            "text": "Nulla in elit pariatur pariatur nostrud veniam laboris. Sint excepteur dolor dolore do nisi. Eu ex occaecat occaecat commodo.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Magna duis consequat aliqua duis voluptate mollit aliquip.",
            "text": "Dolore irure laboris fugiat minim deserunt. Velit consectetur fugiat id nostrud et commodo officia et magna. Ullamco amet qui deserunt in Lorem ut incididunt ut mollit consequat fugiat exercitation. Culpa cupidatat laborum qui velit enim id eiusmod culpa nostrud do in. Proident cillum adipisicing adipisicing elit ullamco consectetur.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "strawberry"
            ]
        },
        {
            "isActive": false,
            "title": "Enim laboris proident qui ex aute proident elit elit anim eiusmod duis duis laborum culpa.",
            "text": "Labore officia amet tempor sit ex cillum. Cillum quis reprehenderit est Lorem nisi mollit duis. Lorem est duis aliqua commodo. Ea ea pariatur irure cupidatat esse ad anim sit aliqua minim irure sunt. Veniam cupidatat dolor veniam culpa ea est proident velit culpa velit occaecat irure aliquip. Qui sint irure quis ullamco dolore labore mollit.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Ex est aute tempor irure veniam aliqua reprehenderit excepteur veniam laborum exercitation labore proident.",
            "text": "Sunt ipsum exercitation consequat consequat et mollit exercitation non enim laborum est commodo esse. Sit nostrud in exercitation duis culpa nisi anim. Velit mollit aliqua amet tempor officia in consectetur sint excepteur exercitation. Velit ea occaecat aliqua elit adipisicing ullamco qui minim sit incididunt occaecat cillum aute cupidatat. Sit qui reprehenderit Lorem est pariatur esse. Voluptate fugiat nisi do adipisicing reprehenderit deserunt esse ad quis ullamco aute nisi laboris excepteur.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": false,
            "title": "Nisi id ad amet dolore pariatur sit duis ut nisi ex ullamco pariatur Lorem.",
            "text": "Eiusmod consectetur ut cupidatat sint cupidatat occaecat ad culpa minim culpa in aliquip. Aliqua minim mollit qui sint occaecat proident exercitation proident sit exercitation. Est sunt elit anim ea non nulla reprehenderit. Elit id nostrud ad proident sunt esse eiusmod do culpa fugiat non cillum sint dolor. Eu laboris aliqua quis ex. Minim eiusmod non magna do minim ipsum do adipisicing aliqua deserunt.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Ut officia do aute eu esse esse sint voluptate esse ea laboris.",
            "text": "Do minim do elit voluptate et reprehenderit tempor consectetur nostrud dolore exercitation. Reprehenderit ad ipsum ad eiusmod consectetur mollit esse voluptate laborum. Reprehenderit ex excepteur commodo excepteur mollit et id laborum excepteur enim quis sunt consectetur incididunt. Ea Lorem do ut esse. Commodo tempor sunt aliquip eu nostrud eiusmod proident pariatur mollit reprehenderit mollit. Exercitation sunt fugiat dolore irure proident.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Adipisicing Lorem consectetur tempor enim ipsum in id reprehenderit quis.",
            "text": "Ex sint mollit aliquip officia commodo in. Reprehenderit velit laboris fugiat ea id. Pariatur irure qui eiusmod est elit cupidatat. Cillum sint proident qui cillum magna magna elit aliquip aliquip pariatur qui nulla. Est elit proident id do esse Lorem dolore aute ullamco incididunt veniam. Esse nulla proident aliquip eu ad. Occaecat sit ex irure labore sit adipisicing officia nulla nisi sint sunt sint ullamco exercitation.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Esse excepteur laboris deserunt cupidatat cillum veniam culpa ea eiusmod reprehenderit nisi commodo.",
            "text": "Cillum incididunt occaecat id ut in nulla aliqua veniam. Aliquip nulla laborum veniam labore tempor sunt anim ex aute id aliquip dolor consectetur aliquip. Pariatur laborum reprehenderit eu laboris irure id Lorem incididunt deserunt officia exercitation eiusmod.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Quis fugiat labore incididunt elit culpa nisi.",
            "text": "Aliquip est dolor deserunt do sint sint cillum nulla exercitation. Sunt dolor adipisicing laboris fugiat veniam sint id. Deserunt culpa non ad eu deserunt. Sunt adipisicing aute officia cupidatat minim. Dolore incididunt id adipisicing eiusmod ea sint do eiusmod. Consequat elit id deserunt magna.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Eu ipsum dolore deserunt occaecat nostrud.",
            "text": "Nostrud ut voluptate voluptate velit mollit in ut sint sit sit veniam adipisicing voluptate. Culpa eiusmod nostrud exercitation qui pariatur. Consequat quis commodo ex Lorem eiusmod. Sint ut adipisicing Lorem commodo excepteur esse irure laboris dolor. Aliquip amet tempor ipsum velit minim occaecat minim ea ad ipsum sint nisi eiusmod reprehenderit. Laboris duis pariatur Lorem nisi consequat exercitation et in commodo mollit dolore excepteur labore.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Enim consectetur mollit mollit qui aliquip id quis officia duis eiusmod quis.",
            "text": "Aliquip consectetur id dolore consequat duis dolore et elit. Reprehenderit commodo et culpa cillum dolore incididunt labore proident quis officia in. Id incididunt voluptate deserunt officia ipsum nisi anim sunt. Tempor officia consequat nostrud tempor ut excepteur qui laborum dolor cupidatat velit do ipsum. Consequat velit proident nisi enim in occaecat.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": false,
            "title": "Labore veniam nisi adipisicing laboris aute.",
            "text": "Ad nisi aliquip nulla adipisicing eu qui laborum irure non Lorem et. Magna dolore aute proident amet quis. Dolor labore mollit ullamco proident officia adipisicing anim cillum dolor qui dolor ullamco. Culpa ut minim voluptate proident proident dolor deserunt laborum dolore mollit tempor. Ipsum duis incididunt ullamco laborum anim eiusmod ut magna. Labore ipsum ad commodo reprehenderit laborum consectetur culpa labore commodo incididunt est. Dolore enim adipisicing quis minim esse eu anim culpa dolore ullamco sunt tempor nisi minim.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Non quis sunt reprehenderit veniam Lorem Lorem pariatur magna deserunt ad velit.",
            "text": "Duis consectetur laboris cupidatat ut occaecat laborum quis non duis reprehenderit. Sit ipsum officia elit laborum do eu labore magna dolor elit. Eu consequat sint aliqua magna ut sit dolor ad elit reprehenderit aute magna incididunt. Ipsum ut nostrud cupidatat aliqua sint velit fugiat in aliqua ex ut nisi quis. Tempor quis nulla velit labore aliqua ut. Incididunt id sit cillum dolor. Tempor dolore mollit veniam quis cillum veniam.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Quis commodo anim sint sit minim dolor dolor dolore.",
            "text": "Ex deserunt consequat consectetur consequat id reprehenderit pariatur labore Lorem est aliquip fugiat minim. Id aliquip proident adipisicing qui. Ipsum Lorem laboris ullamco dolore et esse ut ipsum esse et tempor proident laborum. Nulla cillum do velit magna eu ullamco aliquip. Amet consectetur et amet ipsum est cupidatat ut eiusmod mollit duis ipsum tempor. Eiusmod consectetur sint aliqua pariatur proident tempor enim deserunt officia velit ad.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": false,
            "title": "Elit velit est in officia adipisicing amet commodo veniam qui sit non reprehenderit.",
            "text": "Officia eiusmod labore do do adipisicing dolor qui fugiat veniam occaecat. Enim mollit ea pariatur sint tempor eiusmod. Id ut in eu minim voluptate.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Magna ex Lorem ipsum officia nulla laborum ipsum sint cupidatat.",
            "text": "Id ad sit qui proident. In enim sunt commodo velit. Tempor quis fugiat adipisicing anim pariatur irure quis ad tempor eu dolore do amet ad. Aliqua adipisicing aute ad anim enim ut proident consectetur ullamco. Veniam aliqua quis fugiat nostrud enim culpa in sint dolore occaecat tempor duis consequat aute. Aute aute deserunt ut proident magna minim occaecat velit est in cupidatat officia.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "strawberry"
            ]
        },
        {
            "isActive": false,
            "title": "Cupidatat do sint in id non reprehenderit non incididunt exercitation in dolore ad Lorem labore.",
            "text": "Quis eu aute et quis deserunt. Amet amet exercitation irure ut eiusmod elit dolore eiusmod Lorem tempor ad enim. Deserunt id non officia exercitation anim reprehenderit tempor tempor cupidatat eu quis do. Laboris ipsum tempor laboris exercitation.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Anim culpa dolor esse officia.",
            "text": "Ut deserunt et pariatur labore id quis ut id ea officia laborum proident. Laboris elit pariatur labore incididunt officia Lorem tempor ex amet excepteur aliqua. Qui aliquip ad cillum reprehenderit deserunt aute sit occaecat officia deserunt officia ullamco. Aute anim do duis occaecat nostrud.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": false,
            "title": "Aliquip ullamco adipisicing culpa in ea qui quis consequat quis proident.",
            "text": "Laborum non ea esse id aliqua duis dolore labore esse. Lorem magna commodo deserunt amet culpa sit enim est incididunt labore dolor dolor labore cillum. Elit amet culpa est sint dolor consectetur. Anim aliqua esse consequat esse laborum aute excepteur sunt nulla quis proident consectetur ut. Velit ipsum magna consectetur amet.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": false,
            "title": "Aute aute duis officia duis ut deserunt Lorem irure in.",
            "text": "Consequat dolor ut magna fugiat commodo id proident. Ex culpa sint ullamco excepteur duis enim magna aliquip proident voluptate. Cillum reprehenderit nulla esse mollit aute sunt cupidatat commodo laborum nostrud aliquip ex laborum officia. Culpa adipisicing eiusmod esse voluptate aliqua culpa ex labore non cupidatat ex et reprehenderit do. Laborum magna nostrud dolor enim aute exercitation laboris deserunt eiusmod occaecat deserunt laboris in do. Veniam cillum magna qui minim cillum ex mollit.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": false,
            "title": "Ea laboris nisi ea excepteur cupidatat.",
            "text": "In minim eiusmod deserunt aute tempor labore pariatur aliqua do. Amet dolor officia laboris incididunt consequat proident ex. Ullamco id tempor sunt culpa non pariatur labore anim nulla mollit nostrud laborum aliqua exercitation. Duis adipisicing cupidatat amet veniam. Excepteur enim minim anim reprehenderit non ex commodo quis in sit elit culpa commodo consequat. Ut do pariatur sit est adipisicing.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": false,
            "title": "Veniam minim aute minim laborum veniam.",
            "text": "Nostrud laboris elit eiusmod qui ex qui ea fugiat adipisicing exercitation. Lorem eu labore consectetur nulla mollit do cupidatat magna labore consectetur elit excepteur consectetur. In elit irure non dolor aliquip quis cupidatat aliqua sunt. In consectetur minim aliqua nisi ut in ex nisi.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "strawberry"
            ]
        },
        {
            "isActive": false,
            "title": "Deserunt dolore ex mollit sunt ipsum veniam magna ullamco quis non qui et nisi.",
            "text": "Ut enim ipsum labore Lorem duis sit. Incididunt cillum pariatur nisi cupidatat consequat exercitation velit do magna aliqua culpa. Fugiat do irure in minim mollit do veniam velit fugiat ad dolor sint ullamco dolor. Cillum id laboris consectetur nisi laborum tempor tempor nisi magna mollit magna cupidatat aliquip. Aute non et cillum ullamco.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Anim excepteur consectetur proident esse minim deserunt aliquip commodo laborum dolor aliquip cupidatat.",
            "text": "Ullamco irure ipsum reprehenderit ea ullamco ut ad amet ullamco. Esse occaecat id proident nulla ex duis aliqua velit amet in id quis. Laboris dolore velit cupidatat dolor.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Et quis velit incididunt incididunt laborum amet ex nostrud cillum ullamco irure occaecat.",
            "text": "Tempor ea labore officia duis ullamco mollit esse. Tempor tempor dolore et ex qui nisi dolore elit exercitation ad officia incididunt consequat esse. Incididunt voluptate ea aliqua sit laborum. Magna laborum incididunt adipisicing deserunt cillum do anim eu enim nulla irure incididunt. Ex deserunt cupidatat laboris aute culpa et mollit proident sit eu minim ea. Sit aute veniam mollit quis ipsum culpa eu aliqua ad.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": false,
            "title": "Pariatur sunt consectetur consequat duis tempor officia quis commodo non non.",
            "text": "Commodo ad commodo cupidatat pariatur cillum sunt est. Ex consectetur eiusmod voluptate ipsum ipsum qui non non duis exercitation sint laborum velit. Ad reprehenderit minim aliqua dolor nostrud consequat pariatur cupidatat occaecat labore. Adipisicing minim dolor consequat cupidatat ea esse sint incididunt adipisicing tempor consectetur fugiat nostrud pariatur. Irure exercitation adipisicing nisi est qui exercitation magna in aliquip reprehenderit aliqua aute consectetur.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "strawberry"
            ]
        },
        {
            "isActive": false,
            "title": "Dolor ipsum proident anim ex amet amet laborum incididunt.",
            "text": "Nisi sunt Lorem aliquip nisi culpa pariatur eu ea dolore sint voluptate voluptate laborum. Enim id cupidatat fugiat fugiat commodo voluptate ut. Magna non id labore consequat amet nulla nostrud excepteur sint est in voluptate tempor anim. Eiusmod proident fugiat irure exercitation minim consequat cillum. Aute culpa reprehenderit ex incididunt voluptate culpa sit incididunt amet ex. Duis esse pariatur cillum aliquip. Aliquip eiusmod ut amet tempor ut adipisicing dolore exercitation dolore dolore voluptate culpa aute velit.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Nisi dolore qui ad et aliqua exercitation.",
            "text": "Laborum Lorem magna eu irure magna consectetur ullamco culpa ad sint amet magna velit. Duis anim exercitation duis sunt Lorem ea et enim amet eiusmod do deserunt irure. Adipisicing ut et adipisicing id pariatur cupidatat quis. Labore adipisicing aliquip reprehenderit non consequat duis ullamco ad non excepteur nostrud. Adipisicing exercitation ullamco velit in veniam commodo duis consequat. Culpa aute sunt sint labore.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": false,
            "title": "Proident voluptate velit ad reprehenderit irure ipsum cupidatat tempor ex laborum.",
            "text": "Occaecat sunt commodo aliqua sint elit adipisicing sunt sunt nulla cupidatat. Elit fugiat ipsum ea laborum fugiat occaecat consectetur consequat excepteur elit nulla amet. Cupidatat adipisicing et id minim aliqua laboris adipisicing.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Veniam incididunt adipisicing minim occaecat tempor.",
            "text": "Est excepteur aliquip velit non quis cillum ad ullamco amet. Aliqua aliquip deserunt et anim sint labore nisi culpa veniam ad quis sint cillum. Nisi ullamco consequat amet sunt non ullamco exercitation velit aliqua deserunt eu ad non ut.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Dolor adipisicing labore amet sint.",
            "text": "Dolore nulla laboris labore et nulla ipsum aute commodo et laborum dolor velit. Nostrud exercitation nisi deserunt est magna culpa nisi quis est commodo incididunt ullamco veniam. Enim ea elit aliquip pariatur consequat est quis in. Nulla incididunt cillum duis deserunt veniam dolor sint velit voluptate dolor cillum sit minim. Labore deserunt tempor irure cupidatat ex dolore cillum velit aliquip est.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Dolor velit culpa esse eiusmod pariatur.",
            "text": "Qui laboris sunt tempor aliqua amet minim aliqua. Consequat non eiusmod id culpa eu velit est exercitation et exercitation consectetur esse in. Deserunt reprehenderit pariatur duis ipsum qui dolor. Qui reprehenderit sunt enim do enim et aute duis sint anim. Ex excepteur fugiat sit deserunt. Qui veniam in et exercitation ipsum non ut eu. Eiusmod cillum occaecat labore eu sunt.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Velit quis laboris ad voluptate laboris magna ut eiusmod.",
            "text": "Reprehenderit eu laboris dolor elit laboris Lorem veniam. Commodo anim esse non minim do. Velit pariatur irure et adipisicing ut commodo.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Non dolor minim minim velit.",
            "text": "Consectetur eiusmod pariatur consectetur anim. Labore esse aliquip sint proident cupidatat. Veniam duis id sunt proident laborum officia ut nulla adipisicing excepteur ut fugiat incididunt. Sint est officia fugiat mollit laborum ex nisi nostrud. Commodo aute ullamco consectetur elit reprehenderit reprehenderit. Deserunt minim culpa ex dolor ea veniam sint incididunt. Ullamco do officia dolor qui excepteur sit do pariatur cillum esse.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Esse id reprehenderit nulla enim esse minim velit qui pariatur.",
            "text": "Eu veniam commodo do cillum magna est consequat excepteur eu. Laborum reprehenderit pariatur minim Lorem eiusmod cupidatat ipsum et irure. Sint pariatur irure qui labore. Irure commodo duis magna elit aliqua laborum et laborum commodo. Voluptate ut laboris consequat esse elit non labore mollit nulla.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": true,
            "title": "Esse sit ullamco id cupidatat ad esse adipisicing.",
            "text": "Ex aliqua laboris voluptate amet adipisicing cupidatat sunt officia mollit. Mollit id et est proident aliqua laboris ad labore irure. Culpa tempor mollit labore enim incididunt magna.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "apple"
            ]
        },
        {
            "isActive": false,
            "title": "Pariatur laboris pariatur consectetur velit sunt officia enim exercitation incididunt ullamco excepteur qui est.",
            "text": "Voluptate ipsum in officia ad reprehenderit ex reprehenderit nisi labore in. Nisi laboris excepteur aliquip consectetur cillum nulla nulla. Deserunt qui in tempor excepteur mollit nulla adipisicing duis incididunt laborum dolor elit.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "banana"
            ]
        },
        {
            "isActive": true,
            "title": "Veniam ex veniam laboris ipsum officia.",
            "text": "Enim magna eu non do ea occaecat dolor proident aliqua. Do in voluptate minim est labore. Laborum aliquip occaecat sit amet veniam sit elit velit non culpa. Non pariatur anim voluptate culpa mollit.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "strawberry"
            ]
        },
        {
            "isActive": false,
            "title": "Irure ad aliqua mollit minim aute exercitation ullamco ex tempor excepteur laboris.",
            "text": "Amet duis quis fugiat magna exercitation ut nisi. Velit dolore id ad magna officia mollit dolor. Aute qui occaecat in sint ex exercitation tempor cillum dolor incididunt minim.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "strawberry"
            ]
        },
        {
            "isActive": false,
            "title": "Ullamco elit ullamco sunt ea.",
            "text": "Amet dolor id adipisicing reprehenderit pariatur qui adipisicing veniam sit reprehenderit. Irure tempor anim sunt sint cillum reprehenderit aliquip nulla laboris non cillum proident Lorem. Cupidatat nostrud proident aliqua et excepteur cupidatat id anim deserunt sunt. Ipsum dolore id eiusmod ullamco. Cupidatat adipisicing elit laborum amet labore sit velit velit consectetur.\r\n",
            "picture": "/images/placeholders/placeholder-240x240.jpg",
            "tags": [
                "strawberry"
            ]
        }
    ];



    console.log('Adding records to Posts collection.');
    for (var i = 0; i < data.length; i++) {
      Posts.insert({
        isActive:   data[i].isActive,
        title: data[i].title,
        text: data[i].text,
        picture: data[i].picture,
        tags: data[i].tags,
        createdAt: new Date()
      });
    }
    console.log('A bunch of records successfully added to Posts collection.');
  }
  console.log('Posts collection initialized and ready.');
});
