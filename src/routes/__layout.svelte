<nav>
    <li> <a href=".">Home</a> </li>
    <li> <a href="about">About</a> </li>
    <li> <a href="settings">Settings</a> </li>
</nav>

<style>
    a {
        color: white;
        text-decoration: none;
        /* background-color: aqua; */
    }
    li a:hover {
        background-color: aqua;
    }
    li {
        display: inline-block;
        margin-right: 1em;
        margin-top: 1em;
        text-decoration: none;
        /* display: inline; */
        /* place-items: center; */
    }
    
   nav { 
        display: flex;
        place-items: center;
        margin: 0em auto;
        max-width: 600px;
        padding: 0em 1em;
        justify-content: start;
    }
    @media screen and (min-width: 600px) {
        nav {
            margin-top: 4em;
        }
    }
</style>
<slot></slot>
