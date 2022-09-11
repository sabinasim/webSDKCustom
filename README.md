# webSDKCustom
For FY2023 OKR project where customizing Content Cards and IAM on the Web SDK

- Adding Basic Integration such as
  - change User
  - Logging custom events and event properties
  - Logging of custom attributes
  
- Integration and Customisation of Content cards
  - Basic toggle with braze native buttons
  - Customised braze native content card using override css
  - Custom in webpage HTML that displays incoming content card (but only 1 at a time)
  
- Integration and Customisation of In App message
  - Basic integration with IAM but instead of automatically showing IAM, use subscribeToInAppMessage() to manually display IAM with button toggle
  - Custom HTML Campaign composed on the dashboard
  - Custom local IAM toggle with buttons
  - Custom UI of IAM to display when button is toggled

- There is 'Light' and 'Dark Mode'
  - In CSS, change the background-image URL img/Brazel.jpg (for light) or img/Mirage.jpg (for dark)
  - Backup color is default black gradient if image goes missing