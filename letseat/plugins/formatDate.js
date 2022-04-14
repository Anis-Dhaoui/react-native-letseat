// $$$$$$$$$$$$$$$$$$$$$$ FORMATTING DATE $$$$$$$$$$$$$$$$$$$$$$
export default function formatDate(date, seperator) {
    let getA = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }];
    let getDate = new Date(date)
    function format(m) {
        let f = new Intl.DateTimeFormat('en', m);
        return f.format(getDate);
    }
    return getA.map(format).join(seperator) + "  / " + getDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};