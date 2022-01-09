
# Restaurant Website

Hello, my nick is Sylvant and this is an educational project, which main purpose is to extend my React skills.
The restaurant in question is an actual place i worked in and much of the infromation is real and is or was relevant. 

## Main Project Features
- The project is bilingual. It offers content in Bulgarian or English. Translation of certain parts is done via specially designed dictionary and functional methods. 
- The navigation menu has submenu and additional links.
- The `Menu` page has wide range of items, with fluid appearance based on their content and also offers tooltip for special words. 
- The `submenu` and `tooltip` frames, which by default are positioned according the element that triggered them, have a feature to prevent them from leaving the screen, by repositioning(if necessary)
- The `Contacts` page has *Google Maps* frame. 
- The site offers good responsiveness and appearance for different screens. On smaller(*mobile*) screens, the navigation menu acquires a fixed position when the user is scrolling and it is hidden by default, while in order to appear, a toggle button is available. 
- SVG *images* and *icons* are personally created for the project, including the site logo.

## React Utilities

### React Router
The project uses React Router to offer navigation between pages as well as a package providing *Hash Link* to navigate to page sections. 
There is an error page in case users enter invalid url path.

### State
To provide access to global state to the whole components tree, react *context* is used. The context is also split into segments, which serves only their respective component users, to avoid unnecessary rerenders. *Reducer* is also sparsely used to handle certain state. 

### Hooks

References are used(*useRef*) to store certain values, or cache components when loaded. Custom hook is created, for components which share useEffect hook. Callback is used in few cases, to provide static functions as hook dependencies. 

### Components

Components are written in `JSX`. Many of the components are made to be universal and serve not one purpose, and/or offer conditional rendering, adjusting their contents and complexity based on the payload they are given. 

## Additional Project Functionality
- Various event handlers are attached to elements for certain events(like screen resizing, scrolling, click, mouse position) and respectively unloaded when not required.
- `Regex` is smartly used where possible. 
- The construction of functionality to represent different appearance until images are loaded(in the *Gallery* page) is in place, but currently inert, duo to the high performance of images loading. 
- A structured Data file is available, from where components pull their content(some of which is split in two languages).

## Known Inconvenience

 The poroject has its whole style sheets collected in one big file. For future projects styles should be distributed separately in their respective components section.