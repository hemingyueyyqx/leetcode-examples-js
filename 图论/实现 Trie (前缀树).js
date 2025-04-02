
var Trie = function() {
    //初始化根节点,初始化成对象
    this.root = {}; 
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    //把根节点赋值给node
    let node = this.root;
    //遍历word的每一个字符
    for (let char of word) {
        //如果node[char]不存在，创建新节点
        if (!node[char]) {
            node[char] = {};
        }
        //移动到下一个节点
        node = node[char];
        
    }
    //标记结束节点
        node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    //把根节点赋值给node
    let node = this.root;
    //遍历word中的每一个字符
    for (let char of word) {
        //如果有不存在的字符，立刻返回false
        if (!node[char]) {
            return false;
        }
        //移动到下一个节点
        node = node[char];
    }
    return node.isEnd === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    //把根节点赋值给node
    let node = this.root;
    //遍历word中的每一个字符
    for (let char of prefix) {
        //如果有不存在的字符，立刻返回false
        if (!node[char]) {
            return false;
        }
        //移动到下一个节点
        node = node[char];
    }
    //能遍历完就返回true;
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */