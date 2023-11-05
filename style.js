function addToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

isplay.value =3D &quot;Error&quot;;<br>=C2=A0 =C2=A0 }<br>}<br><br>function=
 clearDisplay() {<br>=C2=A0 =C2=A0 const display =3D document.getElementByI=
d(&quot;display&quot;);<br>=C2=A0 =C2=A0 display.value =3D &quot;&quot;;<br=
>}<br></div>

--000000000000ececd2060966b9ac--
