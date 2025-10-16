# css-cheatsheet

# CSS Cheatsheet

## CSS Declarations

Ada banyak sekali deklarasi CSS yang tersedia untuk digunakan. Namun, tidak semuanya diperlukan dalam pekerjaan sehari-hari. Sebenarnya, kalian dapat membuat situs web yang menarik hanya dengan memahami sebagian dari css declarations tersebut. Itulah kegunaan bootcamp **Web Programming Hack**, dimana kita akan mempersingkat waktu belajar kalian dengan membuang sebagian besar hal yang tidak terpakai.

Berikut ini adalah css declarations yang akan benar-benar kalian pakai:

### Color and Background

1. **color**
    
    ```css
    color: #000000; /* black */
    color: rgb(0, 0, 0); /* black */
    color: rgba(0, 0, 0, 1); /* black with full opacity */
    ```
    
2. **background-color**
    
    ```css
    background-color: #ffffff; /* white */
    ```
    
3. **background-image**
    
    ```css
    background-image: url('image.jpg');
    ```
    
4. **background-repeat**
    
    ```css
    background-repeat: repeat; /* default */
    background-repeat: no-repeat;
    ```
    
5. **background-position**
    
    ```css
    background-position: center;
    background-position: top right;
    ```
    
6. **background-size**
    
    ```css
    background-size: cover;
    background-size: contain;
    ```
    
7. **background-attachment**
    
    ```css
    background-attachment: scroll; /* default */
    background-attachment: fixed;
    ```
    

### Text

1. **font-family**
    
    ```css
    font-family: 'Arial', sans-serif;
    ```
    
2. **font-size**
    
    ```css
    font-size: 16px;
    font-size: 1em;
    ```
    
3. **font-weight**
    
    ```css
    font-weight: normal;
    font-weight: bold;
    font-weight: 700;
    ```
    
4. **font-style**
    
    ```css
    font-style: normal;
    font-style: italic;
    ```
    
5. **line-height**
    
    ```css
    line-height: 1.5;
    ```
    
6. **letter-spacing**
    
    ```css
    letter-spacing: 2px;
    ```
    
7. **text-align**
    
    ```css
    text-align: left;
    text-align: center;
    text-align: right;
    ```
    
8. **text-decoration**
    
    ```css
    text-decoration: none;
    text-decoration: underline;
    text-decoration: line-through;
    ```
    
9. **text-transform**
    
    ```css
    text-transform: none;
    text-transform: capitalize;
    text-transform: uppercase;
    text-transform: lowercase;
    ```
    

### Box Model

1. **width**
    
    ```css
    width: 100px;
    width: 50%;
    ```
    
2. **height**
    
    ```css
    height: 100px;
    height: auto;
    ```
    
3. **padding**
    
    ```css
    padding: 10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    ```
    
4. **margin**
    
    ```css
    margin: 10px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    ```
    
5. **border**
    
    ```css
    border: 1px solid #000;
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    ```
    
6. **border-radius**
    
    ```css
    border-radius: 5px;
    ```
    
7. **box-shadow**
    
    ```css
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    ```
    

### Positioning

1. **position**
    
    ```css
    position: static; /* default */
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;
    ```
    
2. **top, right, bottom, left**
    
    ```css
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    ```
    
3. **z-index**
    
    ```css
    z-index: 10;
    ```
    
4. **float**
    
    ```css
    float: left;
    float: right;
    float: none;
    ```
    
5. **clear**
    
    ```css
    clear: left;
    clear: right;
    clear: both;
    clear: none;
    ```
    

### Display and Visibility

1. **display**
    
    ```css
    display: none;
    display: block;
    display: inline;
    display: inline-block;
    display: flex;
    display: grid;
    ```
    
2. **visibility**
    
    ```css
    visibility: visible;
    visibility: hidden;
    ```
    
3. **overflow**
    
    ```css
    overflow: visible; /* default */
    overflow: hidden;
    overflow: scroll;
    overflow: auto;
    ```
    
4. **opacity**
    
    ```css
    opacity: 1; /* fully visible */
    opacity: 0.5; /* 50% visible */
    opacity: 0; /* fully transparent */
    ```
    

### Flexbox

1. **display**
    
    ```css
    display: flex;
    ```
    
2. **flex-direction**
    
    ```css
    flex-direction: row; /* default */
    flex-direction: row-reverse;
    flex-direction: column;
    flex-direction: column-reverse;
    ```
    
3. **justify-content**
    
    ```css
    justify-content: flex-start; /* default */
    justify-content: flex-end;
    justify-content: center;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
    ```
    
4. **align-items**
    
    ```css
    align-items: stretch; /* default */
    align-items: flex-start;
    align-items: flex-end;
    align-items: center;
    align-items: baseline;
    ```
    
5. **flex-wrap**
    
    ```css
    flex-wrap: nowrap; /* default */
    flex-wrap: wrap;
    flex-wrap: wrap-reverse;
    ```
    
6. **align-content**
    
    ```css
    align-content: stretch; /* default */
    align-content: flex-start;
    align-content: flex-end;
    align-content: center;
    align-content: space-between;
    align-content: space-around;
    ```
    
7. **flex-grow**
    
    ```css
    flex-grow: 0; /* default */
    flex-grow: 1;
    ```
    
8. **flex-shrink**
    
    ```css
    flex-shrink: 1; /* default */
    flex-shrink: 0;
    ```
    
9. **flex-basis**
    
    ```css
    flex-basis: auto; /* default */
    flex-basis: 100px;
    flex-basis: 0%;
    ```
    
10. **flex**
    
    ```css
    flex: 1;
    /*
    shorthand for:
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    */
    ```
    
11. **order**
    
    ```css
    order: 0; /* default */
    order: 1;
    ```
    

### Grid

1. **display**
    
    ```css
    display: grid;
    ```
    
2. **grid-template-columns**
    
    ```css
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 100px auto 100px;
    ```
    
3. **grid-template-rows**
    
    ```css
    grid-template-rows: 1fr 2fr;
    grid-template-rows: 100px auto 100px;
    ```
    
4. **grid-column-gap**
    
    ```css
    grid-column-gap: 10px;
    ```
    
5. **grid-row-gap**
    
    ```css
    grid-row-gap: 10px;
    ```
    
6. **grid-gap**
    
    ```css
    grid-gap: 10px;
    ```
    
7. **grid-column**
    
    ```css
    grid-column: 1 / 3;
    ```
    
8. **grid-row**
    
    ```css
    grid-row: 1 / 2;
    ```
    

### CSS Variables

1. **Defining Variables**
    
    ```css
    :root {
      --main-color: #06c;
      --padding: 10px;
    }
    ```
    
2. **Using Variables**
    
    ```css
    element {
      color: var(--main-color);
      padding: var(--padding);
    }
    ```
    

### Transitions and Animations

1. **transition**
    
    ```css
    transition: all 0.3s ease;
    ```
    
2. **animation**
    
    ```css
    animation: mymove 5s infinite;
    ```
    
3. **@keyframes**
    
    ```css
    @keyframes mymove {
      from {top: 0px;}
      to {top: 200px;}
    }
    ```
    

### Responsive Design

1. **Media Queries**
    
    ```css
    @media screen and (min-width: 768px) {
      body {
        background-color: lightblue;
      }
    }
    ```
    

### Other Useful Properties

1. **cursor**
    
    ```css
    cursor: pointer;
    cursor: default;
    cursor: move;
    ```
    
2. **visibility**
    
    ```css
    visibility: visible;
    visibility: hidden;
    ```
    
3. **white-space**
    
    ```css
    white-space: normal; /* default */
    white-space: nowrap;
    white-space: pre;
    ```
    
4. **overflow-x**
    
    ```css
    overflow-x: hidden;
    overflow-x: scroll;
    ```
    
5. **overflow-y**
    
    ```css
    overflow-y: hidden;
    overflow-y: scroll;
    ```
    

### Filters

1. **filter**
    
    ```css
    filter: none; /* default */
    filter: blur(5px);
    filter: brightness(0.5);
    filter: contrast(200%);
    filter: grayscale(100%);
    ```
    

Ini adalah referensi lengkap tentang css declaration (property: value) yang sering digunakan. Tentunya kita akan mempelajarinya throughout the classes.
