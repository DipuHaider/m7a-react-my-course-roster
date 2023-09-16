### Course Registration

# Three main Features are:

- Fetching data from Json file and shown in card dynamically.

- User can select the courses, Selected courses are shown in an ordered list with index number in Status section in right. If One course is selected more than once then show a toast with message.
- Selected Courses total hour is shown after Courses name along with course total prices and Remaining hours is shown before Course name section. If Remaining Course hours are less than 0 OR total Course hours are more than 20 then show a toast with message. Additionally, Selected Course price is shown in last and if Remaining Course prices are more than 48000 then show a toast with message.

# Managing States:

First, I've defined a state variable courses using React's useState hook, initializing it as an empty array []. The courses variable holds the current state value, and statuses is a function that use to update the courses state. When calling statuses(newValue), it will update the courses state to newValue, and React will re-render the component to reflect the updated state. Similarly, statuses is initialized as an empty array []. This state variable can be used to store and manage a list of statuses or similar data in your React component. creditHourRemaining is initialized with a value of 20. This state variable appears to represent the remaining credit hours in some educational context. totalHour is initialized with a value of 0. This state variable seems to represent the total credit hours in the same educational context.
