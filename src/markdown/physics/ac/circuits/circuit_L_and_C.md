# Obvody AC s indukčností a kapacitou

## Obvody s cívkou

![obvod s civkou](image-8.png)

$$i(t) = I_m \cdot \sin{\omega t}$$
$$u(t) = U_m \cdot \sin{(\omega t + \frac{\pi}{2})} = U_m \cdot \cos{\omega t}$$

![graf civka](image-7.jpg)

- Proud se zpožďuje v důsledku vlastní indukce cívky o $\frac{1}{4}T$

::: tip Induktance
Zavedeme veličinu:
$X_L = \frac{U}{I} = \frac{U_m}{I_m}$ odpovídající odporu

$[X_L] = \Omega$
:::

- induktance $\rightarrow$ závisí na frekvenci $f$ a indukčnosti cívky $L$

$$X_L = \omega \cdot L = 2 \pi f \cdot L$$

::: details
Někdy se $R = X_R$ - resistance
:::

![fázor cívky](image-4.png)

$$\Delta \varphi = \frac{\pi}{2}$$

## Obvody s kapacitorem

![obvod s kapacitorem](image-2.png)

$$i(t) = I_m \cdot \sin{\omega t}$$
$$u(t) = U_m \cdot \sin{(\omega t - \frac{\pi}{2})} = -U_m \cdot \cos{\omega t}$$

![graf kapacitor](image-3.png)

- Napětí se zpožďuje za proudem o $\frac{1}{4}T$ (nabití desek a vytvoření el. pole kapacitoru)

::: tip Kapacitance
Zavedeme veličinu:
$X_C = \frac{U}{I} = \frac{U_m}{I_m}$ odpovídající odporu

$[X_C] = \Omega$
$$X_C = \frac{1}{\omega \cdot C} = \frac{1}{2 \pi f \cdot C}$$
:::

![fázor kapacitoru](image-5.png)

$$\Delta \varphi = -\frac{\pi}{2}$$

## Obrázek celkového fázoru

![fazor celkem](image-6.png)
