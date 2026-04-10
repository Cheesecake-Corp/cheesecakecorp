# Sériový RLC obvod AC

![Zapojení](image-7.png)
Zapojení
![fázor](image-9.png)
fázor

$$i(t) = I_m \cdot \sin{\omega t}$$
$$ \vec{U} = \vec{U_R}+\vec{U_L}+\vec{U_C}$$
$$U^2 = U_R^2+|U_L-U_C|^2$$
$$\tan{\varphi}=\frac{U_L-U_C}{U_R}$$

$\varphi = \frac{\pi}{2}$ -> ideální cívka
$\varphi = -\frac{\pi}{2}$ -> ideální kondenzátor
$\varphi \in (0;\frac{\pi}{2})$ -> RLC obvod má charakter indukčnosti
$\varphi \in (-\frac{\pi}{2};0)$ -> RLC obvod má charakter kapacita
$\varphi = 0$ -> stav rezonance RLC obvodu:

a. jen odpor
b. $U_L = U_C$

$$U_R = R \cdot I$$
$$U_L = X_L \cdot I$$
$$U_C = X_C \cdot I$$
$$U = \sqrt{R^2I^2+(X_LI-X_CI)^2}$$
$$U = I \cdot \sqrt{R^2 + (X_L-X_C)^2}$$

::: tip Impedance
$Z$ je impedance obvodu
$[Z] = \Omega$
$$Z = \sqrt{R^2+\left(\omega L - \frac{1}{\omega \cdot C}\right)^2}$$
:::

Největší proud (největší energii - Joulovo teplo) získáme je-li $X_L-X_C=0$

::: detail
$X_L-X_C$ je reaktance
:::

$$X_L = X_C$$
$$\omega \cdot L = \frac{1}{\omega \cdot L}$$
$$\omega^2=\frac{1}{\sqrt{L \cdot C}}$$

::: tip Thomsonův vztah

Resonanční frekvence obvodu
$$f_0=\frac{1}{2\pi\sqrt{L\cdot C}}$$

$I$ -> max
$E$ -> max
$\varphi=0$

:::
