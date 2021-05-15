<main>
    <div class="container">
        <h1>hola</h1>
        <p>

	"Let's just say that if complete and utter chaos was lightning, he'd be the sort to stand on a hilltop in a thunderstorm wearing wet copper armour and shouting 'All gods are bastards'." <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <p>
        page areas or small user interface elements. This article introduces the CSS Grid Layout and the new terminology that is part of the CSS Grid Layout Level 1 specification. The features shown in this overview will then be explained in greater detail in the rest of this guide. 
        What is a grid?
    </p>

    <p>
        A grid is a set of intersecting horizontal and vertical lines defining columns and rows. Elements can be placed onto the grid within these column and row lines. CSS grid layout has the following features:
        Fixed and flexible track sizes
    </p>

    <p>
        You can create a grid with fixed track sizes – using pixels for example. This sets the grid to the specified pixel which fits to the layout you desire. You can also create a grid using flexible sizes with percentages or with the new fr unit designed for this purpose.
        Item placement
    </p>

    <p>
        You can place items into a precise location on the grid using line numbers, names or by targeting an area of the grid. Grid also contains an algorithm to control the placement of items
    </p>
    </div>
</main>

<style type="text/css" media="all">
    :global(:root) {
        background-color: #131415;
        color: white;
        font-family: Arial;
        /* --font-mono: "SFMono-Regular"; */
    }
    @font-face {
    font-family:Inter;
    font-style:normal;
    font-weight:200;
    font-display:block;
    src:url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2) format("woff2");
    }

    main {
        /* font-family: sans-serif; */
    
        /* display: grid; */
        /* place-items: center; */
        margin: 0 auto;
        max-width: 600px;
        padding: 0em 1rem;
    }
    .container >* {
        width: 100%;
    }
</style>
