import { AutoComplete,DataSourceType } from "./autoComplete";
interface LakerPlayerProps {
  value: string;
  number: number;
}
const meta = {
  title: "AutoComplete",
  component: AutoComplete,
  tags: ["autodocs"],
};

export default meta;


// const handleChange = (query: string) => {
//   // const lakers = ["bradley", "pope", "caruso", "cook", "cousins"];
//   // return lakers
//   //   .filter((name) => name.includes(query))
//   //   .map((name) => ({ value: name }));
// const lakersWithNumber = [
//     {value: 'bradley', number: 11},
//     {value: 'pope', number: 1},
//     {value: 'caruso', number: 4},
//     {value: 'cook', number: 2},
//     {value: 'cousins', number: 15},
//     {value: 'james', number: 23},
//     {value: 'AD', number: 3},
//     {value: 'green', number: 14},
//     {value: 'howard', number: 39},
//     {value: 'kuzma', number: 0},
//   ]
//   return lakersWithNumber.filter(player=>
//     player.value.includes(query)
//   )
  
   
// };
// const handleFetch = (query:string)=>{
//   return fetch(`https://api.github.com/search/users?q=${query}`)
//   .then(res=>res.json())
//   .then(({items})=>{
//     return items.slice(0,10).map(item=>({value:item.login,...item}))
//   })
// }
// // const renderOption = (item:DataSourceType<LakerPlayerProps> )=>{
// //   return (
// //     <>
// //     <h2>name:{item.value}</h2>
// //     <p>value:{item.number}</p>
// //     </>
// //   )
// // }
// const renderOption = (item:DataSourceType<GithubUserProps>)=>{
//   const itemWithGithub = item as DataSourceType<GithubUserProps>
//   return(
//     <>
//       <h2>Name:{itemWithGithub.value}</h2>
//       <p>url:{itemWithGithub.url}</p>
//     </>
//   )
// }
// export const SimpleComplete = () => (
//   <AutoComplete fetchSuggestions={handleFetch} onSelect={action('selected')} renderOption={renderOption} />
// );




export const BaseAnto = () => {
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
const handleFetch = (query: string) => {
  return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
}
  return (
    <AutoComplete
  fetchSuggestions={handleFetch}
  placeholder="输入湖人队球员英文名试试"
/>
  )
}
BaseAnto.storyName = "基本搜索";




export const PropsTemplate =()=>{
  const lakersWithNumber = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
  ] 
  const handleFetch = (query: string) => {
    return lakersWithNumber.filter(player => player.value.includes(query))
  }
  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakerPlayerProps>
    return (
      <>
        <b>名字: {itemWithNumber.value}</b>
        <span>球衣号码: {itemWithNumber.number}</span>
      </>
    )
  }
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      placeholder="输入湖人队球员英文,自定义下拉模版"
      renderOption={renderOption}
    />
  )
  
} 
PropsTemplate.storyName = "自定义搜索结果模板";


export const AsynchronousCompontant =()=>{
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }
  
  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <span>url: {itemWithGithub.url}</span>
      </>
    )
  }
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      placeholder="输入 Github 用户名试试"
      renderOption={renderOption}
    />
  )
}
AsynchronousCompontant.storyName = "支持异步搜索";