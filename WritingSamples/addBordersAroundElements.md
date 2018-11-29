[//]: # This is an article which has been merged sucessfully into the FreeCodeCamp guide 
[//]: # 
[//]: # 


# This is an article which has been merged sucessfully into the FreeCodeCamp guide 

---
title: Add Borders Around Your Elements
---
## Add Borders Around Your Elements

You may want to add borders to an element. You can add borders that go all the way around or have borders just on the top, right, left, or bottom of an element.

When we add a border, we need to include some style information so the border shows up.

We can control the border's color:

```css
.greenBorder {
border-color: green;
}
```

The border's thickness:

```css
.thinBorder {
border-width: 1px;
}
```

Or the border's style:

```css
.myBorder {
border-style: solid;
}
```

And we can do all of these at once in any order like this:

```css
.myBorder {
border-color: green;
border-style: dotted;
border-width: 5px;
}
```

Don't forget your semicolons!

We can also tell CSS all this information at once in a shorter way:

```css
.myBorder {
border: 5px solid red;
}
```

In this shorter version, the order should go width, style, then color.
