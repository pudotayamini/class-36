class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(250,250);

        var input = createInput("NAME")
        input.position(250,150);

        var button = creatButton("PLAY");
        button.position(290,290)

        

    }
}