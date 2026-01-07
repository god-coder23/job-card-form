import Card from './components/card'
const App = () => {
  const jobOpenings = [
  {
    company: "Google",
    brandLogo: "https://imgs.search.brave.com/CU07Rj_DG26UH49RAQB93d0qf0dTvkraUQ_7df5Oruc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc",
    datePosted: "5 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    payPerHourUSD: '$85/hr',
    location: "Mumbai, India"
  },
  {
    company: "Amazon",
    brandLogo: "https://imgs.search.brave.com/vF4y19HDADbDSzV1Sqgqth7f7PhNjYNEs65f19xvIuM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzMv/MjIwLzkzNi9zbWFs/bC9hbWF6b24tbG9n/by1zeW1ib2wtZWNv/bW1lcmNlLXdlYnNp/dGUtaXRzLWhlYWRx/dWFydGVycy1hcmUt/bG9jYXRlZC1pbi1z/ZWF0dGxlLWluLXdh/c2hpbmd0b24tc3Rh/dGUtdW5pdGVkLXN0/YXRlcy1vZi1hbWVy/aWNhLWFtYXpvbi1p/cy10aGUtbGFyZ2Vz/dC1vbmxpbmUtc2Fs/ZXMtd2Vic2l0ZS1p/bi10aGUtdW5pdGVk/LXN0YXRlcy1mcmVl/LXBuZy5wbmc",
    datePosted: "2 days ago",
    tag1: "Full-time",
    tag2: "Junior",
    payPerHourUSD: '$45/hr',
    location: "Assam, India"
  },
  {
    company: "Meta",
    brandLogo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    datePosted: "1 week ago",
    tag1: "Full-time",
    tag2: "Senior",
    payPerHourUSD: '$90/hr',
    location: "Delhi, India"
  },
  {
    company: "Apple",
    brandLogo: "https://imgs.search.brave.com/R979K2QkR3eQF9V2SXAZ8mqKIgOJDz-CbWrZ_BQzAnE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzU2LzAwLzkz/LzM2MF9GXzQ1NjAw/OTMyMl9ucWZqQm1i/VjJwak0xTXdNNmJi/WFdPcTZpQWl2QWNK/ai5qcGc",
    datePosted: "3 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    payPerHourUSD: '$80/hr',
    location: "Sikkim, India"
  },
  {
    company: "Netflix",
    brandLogo: "https://imgs.search.brave.com/bG-xPD1-pu6r_82Ng7Quwo5_-vgop94F01k_siJATSY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/Mzk2LzgxNC9zbWFs/bC9uZXRmbGl4LW1v/YmlsZS1hcHBsaWNh/dGlvbi1sb2dvLWZy/ZWUtcG5nLnBuZw",
    datePosted: "6 days ago",
    tag1: "Contract",
    tag2: "Senior",
    payPerHourUSD: '$100/hr',
    location: "Uttrakhand, India"
  },
  {
    company: "Microsoft",
    brandLogo: "https://imgs.search.brave.com/_opwAgY4GyasSwE70tgklfC55bl3UxFFcWIu1E_Dwa4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLWltYWdlLTIz/LnBuZw",
    datePosted: "4 days ago",
    tag1: "Full-time",
    tag2: "Junior",
    payPerHourUSD: '$50/hr',
    location: "Kashmir, India"
  },
  {
    company: "Tesla",
    brandLogo: "https://imgs.search.brave.com/F5OTIiXQsj1Oyc_QZ1Pcf1XFN1HfraeROF6QZqwmMHw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvLndp/bmUuc3Zn",
    datePosted: "2 weeks ago",
    tag1: "Contract",
    tag2: "Senior",
    payPerHourUSD: '$95/hr',
    location: "Guwahati, India"
  },
  {
    company: "NVIDIA",
    brandLogo: "https://imgs.search.brave.com/3d3SsftffRiYHk-cMzHBG-Jo3ALXNr0KJavqysiS2iM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9OdmlkaWEv/TnZpZGlhLUhvcml6/b250YWwtTG9nby53/aW5lLnN2Zw",
    datePosted: "5 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    payPerHourUSD: '$88/hr',
    location: "Chandigarh, India"
  },
  {
    company: "Uber",
    brandLogo: "https://imgs.search.brave.com/-1j7m3WVfFwguLMDSw7XzL2UvuBnvDDfnfpncjwP1z4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y29kb3QuZ292L3By/b2dyYW1zL2V4cHJl/c3NsYW5lcy9hc3Nl/dHMvaG92My91YmVy/LWxvZ28tYmxhY2sv/QEBpbWFnZXMvaW1h/Z2U",
    datePosted: "3 days ago",
    tag1: "Full-time",
    tag2: "Junior",
    payPerHourUSD: '$48/hr',
    location: "Noida, India"
  },
  {
    company: "Airbnb",
    brandLogo: "https://imgs.search.brave.com/yyug71OkbQF5cxqbjap3yrSPzDLi5r-HjvNAXGZcpZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEwL2FpcmJuYi1s/b2dvLTAucG5n",
    datePosted: "1 week ago",
    tag1: "Contract",
    tag2: "Senior",
    payPerHourUSD: '$92/hr',
    location: "Gurgaon, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card name={elem.company} date={elem.datePosted} jagah={elem.location} logo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.payPerHourUSD}/>
      })}
    </div>
  )
}

export default App
