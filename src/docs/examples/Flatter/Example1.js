/* Flatter Example */
import React from 'react';
import { Flatter } from '@occmundial/occ-atomic';

const htmlTextExample = `
<p class="c01601 c01604 c01620 c01636">Descripción</p><div><pre class="ql-syntax" spellcheck="false">GRUPO GAYOSSO, EMPRESA LÍDER Y PIONERA EN SERVICIOS FUNERARIOS, RECONOCIDA COMO UNA DE LAS MEJORES EMPRESAS PARA TRABAJAR, TE INVITA A INTEGRARTE A SU EQUIPO DE TRABAJO COMO:
 
GERENTE COMERCIAL DE DESARROLLO DE VENTAS - MONTERREY
***OBTEN INGRESOS COMPETITIVOS DENTRO DEL MERCADO LABORAL Y FORMA PARTE DE ESTA GRAN EMPRESA DESARROLLANDO TUS HABILIDADES Y EXPERIENCIA OBTENIENDO ASÍ UN CRECIMIENTO PERSONAL Y PROFESIONAL***
INTERESADOS:
***ENVÍA TU CURRICULUM AL CORREO DE CONTACTO O BIEN POSTÚLATE POR ESTE MEDIO***
***CONTRATACIÓN INMEDIATA***
OFRECEMOS:
1) SUELDO BASE: 12,000 MENSUALES
2) PRESTACIONES DE LEY Y SUPERIORES
3) BONO GARANTÍA DE 18,000 LOS 3 PRIMEROS MESES 
4) VALES DE GASOLINA (1500 MENSUALES)
5) CRECIMIENTO PERSONAL Y PROFESIONAL
6) CONVENCIONES CON TODOS LOS GASTOS PAGADOS
7) EXCELENTE AMBIENTE DE TRABAJO
8) CAPACITACIÓN CONSTANTE 
9) APOYO PARA LOGRAR OBJETIVOS Y METAS
10) ZONA DE TRABAJO: MONTERREY
11) CERTIFICACIONES EN VENTAS
12) HORARIO DE TRABAJO: LUNES A VIERNES DE 9 AM A 8 PM Y SÁBADOS DE 9 AM A 3 PM (CON DISPONIBILIDAD DE HORARIO)
SOLO NECESITAS:
-Escolaridad: Licenciatura Concluida
-Edad: Indistinta
-Experiencia: 2 años como gerente de ventas o gerente comercial, manejando una plantilla de 20 a 30 asesores de ventas, de preferencia que haya trabajado con productos o servicios intangibles (TDC, créditos, inmobiliarias, servicios en general)
-Cuente con automóvil propio (INDISPENSABLE)
-Disponibilidad de horario
***POSTÚLATE POR ESTE MEDIO O BIEN MANDA TU CURRICULUM AL CORREO DE CONTACTO y a la brevedad nos pondremos en contacto contigo***
</pre><p><br></p></div>
<p class=".wasd"><code>Regular</code></p><p><strong>Bold</strong></p><p><em>Italic</em></p>
<p><br></p><p><br></p><ul><li><em>Bullet 1</em></li><li><em>Bullet 2</em></li>
<li><em>Bullet 3</em></li></ul><p><strong><em>Bold Italic</em></strong>
<em><strong>Italic Bold</strong></em></p><p><br></p><h4>Heading 4</h4>
<p>
<strong>First Row</strong><em>First Row</em><br/><strong>Second Row</strong><em>Second Row</em>
<strong>First Row</strong><em>First Row</em><br/><strong>Second Row</strong><em>Second Row</em>
</p>`;

export default function Example1() {
    return (
        <div>
            <Flatter htmlText={htmlTextExample} />
        </div>
    );
}
