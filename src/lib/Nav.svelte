<nav>
    <li> <a href=".">Home</a> </li>
    <li> <a href="about">About</a> </li>
    <li> <a href="blog">Blog</a> </li>
</nav>

<style>
    a {
        font-family: 'Source Sans Pro', sans-serif;
        color: var(--dark-primary);
        text-decoration: none;
        /* color: var(--dark-accent); */
        /* background-color: aqua; */
        /* transition: color 0.1s; */
    }
    li a:focus, 
    li a:hover {
        /* text-decoration: underline 3px; */
        color: var(--dark-accent);
    }
    li {
        display: inline-block;
        margin-right: 2em;
        /* margin-top: 0em; */
        /* text-decoration: none; */
        /* display: inline; */
        /* place-items: center; */
    }
    
   nav { 
        display: flex;
        place-items: center;
        /* margin: 0rem auto; */
        margin-bottom: 3em;
        /* max-width: 600px; */
        /* padding: 0em 1em; */
        justify-content: start;
    }
    @media screen and (min-width: 600px) {
        nav {
            margin-top: 3em;
        }
    }
</style>
