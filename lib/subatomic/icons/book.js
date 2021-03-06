import colors from '../colors';
import spacing from '../spacing';

export default {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    icon: (color = [colors.grey900]) => (
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24">
            <path fill="${color[0]}" fill-rule="evenodd" d="M8 4c-.552 0-1 .447-1 1v10c0 .553.448 1 1 1h1.5c.57 0 1.07.118 1.5.328V5.994l-.003-.063c-.004-.06-.011-.151-.027-.262-.031-.227-.092-.513-.206-.784-.113-.273-.261-.49-.443-.635C10.154 4.116 9.908 4 9.5 4H8zm4 2h1v-.022l-.001-.04c0-.031-.003-.074-.006-.126-.006-.105-.018-.248-.042-.418-.046-.336-.141-.8-.34-1.279-.2-.477-.52-1.01-1.041-1.427C11.033 2.258 10.342 2 9.5 2H8C6.343 2 5 3.343 5 5v10c0 1.657 1.343 3 3 3h1.5c.408 0 .654.116.82.25.183.145.33.362.444.635.114.271.175.557.206.784.016.11.023.202.027.261l.003.064v.01-.002.002c.002.55.45.996 1 .996.552 0 1-.448 1-1V6h-1zm-1 14.002z"/>
            <path fill="${color[0]}" fill-rule="evenodd" d="M16 4c.552 0 1 .447 1 1v10c0 .553-.448 1-1 1h-1.5c-.57 0-1.07.118-1.5.328V5.994l.003-.063c.004-.06.011-.151.027-.262.031-.227.092-.513.206-.784.113-.273.261-.49.443-.635.167-.134.413-.25.821-.25H16zm-4 2h-1v-.022l.001-.04c0-.031.003-.074.006-.126.006-.105.018-.248.042-.418.046-.336.141-.8.34-1.279.2-.477.52-1.01 1.041-1.427.537-.43 1.228-.688 2.07-.688H16c1.657 0 3 1.343 3 3v10c0 1.657-1.343 3-3 3h-1.5c-.408 0-.654.116-.82.25-.183.145-.33.362-.444.635-.114.271-.175.557-.206.784-.016.11-.023.202-.027.261l-.003.064v.01-.002.002c-.002.55-.45.996-1 .996-.552 0-1-.448-1-1V6h1zm1 14.002z"/>
            <path fill="${color[0]}" fill-rule="evenodd" d="M4.5 6.5c-.552 0-1 .448-1 1V19c0 .552.448 1 1 1h15c.552 0 1-.448 1-1V7.5c0-.552-.448-1-1-1h-1v-2h1c1.657 0 3 1.343 3 3V19c0 1.657-1.343 3-3 3h-15c-1.657 0-3-1.343-3-3V7.5c0-1.657 1.343-3 3-3H5v2h-.5z"/>
        </svg>`
    )
};