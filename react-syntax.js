const p1 = <p id="large">foo</p>

const p2 = <p id="small">bar</p>

const myDiv = (
    <div>
        <h1>Hello world</h1>
    </div>
)

const blog = (
    <div>
        <img src="pics/192940u73.jpg" />
        <h1>
            Welcome to Dan's Blog!
        </h1>
        <article>
            Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
        </article>
    </div>
);

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

const myList = (
    <ul>
        <li>Cats</li>
        <li>More Cats</li>
        <li>Moriah's Cats</li>
    </ul>
);

ReactDOM.render(
    myList,
    document.getElementById('app')
);