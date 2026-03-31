# Obvody AC s rezistorem

1. Jednoduché - obsahují 1 prvek - rezistor, indukčnost (cívka), kapacita (kondenzátor)
2. Složené - obsahují více prvků: zkratka RLC

![Obvod](image.png)

$$i(t) = I_m \cdot \sin{\omega t}$$
$$I_m = \frac{U_m}{R} \Rightarrow R = \frac{U_m}{I_m}$$

![Graaaffffff](image-1.png)

amplituda nezávisí na frekvenci obvodu

<br/>

- odpor je stejný jako v obvodu stejnosměrného proudu

$$u(t) = U_m \cdot \sin{\omega t}$$

## Výkon

<iframe src="https://www.desmos.com/calculator/gkklpfmqu1?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

$P$ - červená
$I$ - zelená
$P_m$ - fialová

$$P=U \cdot I$$
$$P=u(t)\cdot i(t)$$
$$P=R\cdot i^2(t)$$
$$i(t)=I_m \cdot \sin{\omega t}$$
$$P(t)=R \cdot I_m^2 \cdot \sin^2{\omega t}$$

## Práce

$$W = P \cdot \Delta t$$

Práce za periodu:
$$W=\frac{1}{2}P_m \cdot T$$
$$W = \frac{1}{2}R \cdot I_m^2 \cdot T $$
$$ P = \frac{W}{T} = \frac{1}{2}I_m^2 \cdot R = RI^2$$

## Efektivní hodnoty AC $I$ a $U$

$$I = \frac{I_m}{\sqrt{2}}$$
$$U = \frac{U_m}{\sqrt{2}}$$

$$P = U \cdot I$$

Efektivní hodnoty střídavého proudu a napětí odpovídají hodnotám stejnostměrného proudu a napětí, při nichž je v obvodu s daným střídavým proudem stejný výkon jako v obvodu DC.
