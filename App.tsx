import Providers from './src/components/AuthProviders'

export default Providers;

/**
 * navigation.navigate("name")
 * navigation.goBack()
 * 
 * for components navigation option 
 * I suggest to use header () => null, rather just null
 * 
 * 
 * !! 我们可以将整个app看作是一个水波
 * 一旦里面的东西改变了，就会往外面追减影响，外面的值一旦改变，就会re-render整个项目
 * 这个就是登陆等登出的精髓
 * 
 * 
 * !! 只有stack的时候，才回头头上的标题
 */