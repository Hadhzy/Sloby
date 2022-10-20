$${\color{red}Sloby \space \color{lightblue}Parser \space \color{orange} \space \color{lightblue}!!}$$

### *What is sloby parser?*
```
Sloby parser is a parser for programming, it is able to make connection between typescript and python.
```
### *Why is it worth it?* 


> ***Extremely simple***  :sun_with_face:

> ***Up-to-date(modern and not outdated)*** :alarm_clock:

> ***Terribly useful*** :mortar_board:

> ***Decode possibilities*** :twisted_rightwards_arrows:


### *How does it work?*

#### Rules:

- **Following sequences from top to down**
- **Define code indentation relying on json.**

#### Syntax:
- ***Every slobyparser's going to be start with "slobyparser" sign.***
```
slobyparser()
```
- ***Every single block has to include _Curly Brackets_***
```
slobyparser("function1": {})
```

#### Examples: 
*python*:
```python
def function1(name: str, age: int):
    if name == "gabor":
        return True
    else:
        print("tomas")
    if name == "nono":
        print("hahahah")
    return [name, age]
```
*typescript*
```ts
function function1(name: string, age:  number) {
    if (name == "gabor") {
        return true
    } else console.log("tomas")

    if (name == "nono") {
        console.log("hahahah")
    } 
    return [name, age]
}
```
*parser*

```
slobyparser("function1": {
    type: "function",
    params: {
        name: {type: "str"}, age: {type: "int"}
    },
    body: {"statement": {if: name == "gabor", instate: print("gabor")}, {else: instate: "print("tomas")"}},
          {"statement": {if: name == "nono", instate: print("hahahah") }}
          {"return": [name, age]}

})
```
