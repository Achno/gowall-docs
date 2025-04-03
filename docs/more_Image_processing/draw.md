# Draw on the Image

`Draw` allows you to create:
-  **effects** (grid effect), **solid color** images or **gradients** , add a **border** (with a color and border size)


## Add a border

    The below draws a border 5px thick with the color #5D3FD3

    ```bash
gowall draw ~/Pictures/img.png -c #5D3FD3 -b 5
gowall draw ~/Pictures/img.png -c #5D3FD3 -b 5 --output ~/NewFolder/newName.png
    ```
![border](./img/border.png)

##### ➤  `Batch conversion`
    ```bash
gowall draw --batch img.png,img2.png -c #5D3FD3 -b 5
gowall draw --batch img.png,img2.png -c #5D3FD3 -b 5 --output ~/NewFolder
    ```

##### ➤  `Directory conversion`
    ```bash
gowall draw --dir ~/Pictures/Dir -c #5D3FD3 -b 5
gowall draw --dir ~/Pictures/Dir -c #5D3FD3 -b 5 --output ~/NewFolder
    ```


<br />
## Create Solid color & Gradient Images

Under construction...🔨 (Next update?) 

<br />
## Create Images out of Shapes

Under construction...🔨 (Next update?) 