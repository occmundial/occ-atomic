# Organisms
Here's the documentation on how to implement each of the Organism components:

### R12:
- [Header](#header)
- [Footer](#footer)

## Header
The R12 Header is a component with a pretty specific use case, being a big part of the whole UI of the application. That's why it belongs to Organisms. Obviously is not a "flexible" component, you can just use it in a certain way. And the same goes for the `Footer` component.

The header needs a property `title` with the name of the section you're navigating. Related to this is the property `active`, that indicates which icon should be highlighted.

It receives the property `config`, with an object of all the URL's to use. If you want to add a new link to the header you will have to add it to all your config objects in all the applications that use the `Header`.

You have to send `properties`, `recruiterData` and `validEmail`, all of them are directly related to the recruiter.

And finally, you have to send the next three functions: `showR11`, `signOut` and `navigate`.

`showR11` is a function to show a modal window (implemented in your application). `signOut` is clearly the function to close the session. `navigate` tells the three buttons on the main menu what to do.

## Footer
The implementation of the `Footer` is easier, just send the property `config` with all the URL's to use. That's it.