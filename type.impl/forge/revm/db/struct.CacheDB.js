(function() {var type_impls = {
"forge":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ExtDB&gt; <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/db/struct.CacheDB.html#tymethod.new\" class=\"fn\">new</a>(db: ExtDB) -&gt; <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_contract\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/db/struct.CacheDB.html#tymethod.insert_contract\" class=\"fn\">insert_contract</a>(&amp;mut self, account: &amp;mut <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.AccountInfo.html\" title=\"struct forge::revm::interpreter::primitives::AccountInfo\">AccountInfo</a>)</h4></section></summary><div class=\"docblock\"><p>Inserts the account’s code into the cache.</p>\n<p>Accounts objects and code are stored separately in the cache, this will take the code from the account and instead map it to the code hash.</p>\n<p>Note: This will not insert into the underlying external database.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_account_info\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/db/struct.CacheDB.html#tymethod.insert_account_info\" class=\"fn\">insert_account_info</a>(&amp;mut self, address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>, info: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.AccountInfo.html\" title=\"struct forge::revm::interpreter::primitives::AccountInfo\">AccountInfo</a>)</h4></section></summary><div class=\"docblock\"><p>Insert account info but not override storage</p>\n</div></details></div></details>",0,"forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ExtDB&gt; <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;<div class=\"where\">where\n    ExtDB: <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_account\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/db/struct.CacheDB.html#tymethod.load_account\" class=\"fn\">load_account</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;mut <a class=\"struct\" href=\"forge/revm/db/struct.DbAccount.html\" title=\"struct forge::revm::db::DbAccount\">DbAccount</a>, &lt;ExtDB as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the account for the given address.</p>\n<p>If the account was not found in the cache, it will be loaded from the underlying database.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_account_storage\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/db/struct.CacheDB.html#tymethod.insert_account_storage\" class=\"fn\">insert_account_storage</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n    slot: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;,\n    value: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, &lt;ExtDB as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>insert account storage without overriding account info</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.replace_account_storage\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/db/struct.CacheDB.html#tymethod.replace_account_storage\" class=\"fn\">replace_account_storage</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n    storage: <a class=\"struct\" href=\"forge/revm/precompile/struct.HashMap.html\" title=\"struct forge::revm::precompile::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;, <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, &lt;ExtDB as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>replace account storage without overriding account info</p>\n</div></details></div></details>",0,"forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-Clone-for-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ExtDB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;<div class=\"where\">where\n    ExtDB: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Database-for-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-Database-for-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ExtDB&gt; <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a> for <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;<div class=\"where\">where\n    ExtDB: <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.storage\" class=\"method trait-impl\"><a href=\"#method.storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.storage\" class=\"fn\">storage</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n    index: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Get the value in an account’s storage slot.</p>\n<p>It is assumed that account is already loaded.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = &lt;ExtDB as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a></h4></section></summary><div class='docblock'>The database error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.basic\" class=\"method trait-impl\"><a href=\"#method.basic\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.basic\" class=\"fn\">basic</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.AccountInfo.html\" title=\"struct forge::revm::interpreter::primitives::AccountInfo\">AccountInfo</a>&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get basic account information.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.code_by_hash\" class=\"method trait-impl\"><a href=\"#method.code_by_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.code_by_hash\" class=\"fn\">code_by_hash</a>(\n    &amp;mut self,\n    code_hash: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.Bytecode.html\" title=\"enum forge::revm::interpreter::primitives::Bytecode\">Bytecode</a>, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get account code by its hash.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.block_hash\" class=\"method trait-impl\"><a href=\"#method.block_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.block_hash\" class=\"fn\">block_hash</a>(\n    &amp;mut self,\n    number: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get block hash by block number.</div></details></div></details>","Database","forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DatabaseCommit-for-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-DatabaseCommit-for-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ExtDB&gt; <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseCommit.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseCommit\">DatabaseCommit</a> for <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit\" class=\"method trait-impl\"><a href=\"#method.commit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseCommit.html#tymethod.commit\" class=\"fn\">commit</a>(&amp;mut self, changes: <a class=\"struct\" href=\"forge/revm/precompile/struct.HashMap.html\" title=\"struct forge::revm::precompile::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>, <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.Account.html\" title=\"struct forge::revm::interpreter::primitives::Account\">Account</a>&gt;)</h4></section></summary><div class='docblock'>Commit changes to the database.</div></details></div></details>","DatabaseCommit","forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DatabaseRef-for-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-DatabaseRef-for-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ExtDB&gt; <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a> for <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;<div class=\"where\">where\n    ExtDB: <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = &lt;ExtDB as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a></h4></section></summary><div class='docblock'>The database error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.basic_ref\" class=\"method trait-impl\"><a href=\"#method.basic_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#tymethod.basic_ref\" class=\"fn\">basic_ref</a>(\n    &amp;self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.AccountInfo.html\" title=\"struct forge::revm::interpreter::primitives::AccountInfo\">AccountInfo</a>&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get basic account information.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.code_by_hash_ref\" class=\"method trait-impl\"><a href=\"#method.code_by_hash_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#tymethod.code_by_hash_ref\" class=\"fn\">code_by_hash_ref</a>(\n    &amp;self,\n    code_hash: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.Bytecode.html\" title=\"enum forge::revm::interpreter::primitives::Bytecode\">Bytecode</a>, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get account code by its hash.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.storage_ref\" class=\"method trait-impl\"><a href=\"#method.storage_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#tymethod.storage_ref\" class=\"fn\">storage_ref</a>(\n    &amp;self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n    index: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get storage value of address at index.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.block_hash_ref\" class=\"method trait-impl\"><a href=\"#method.block_hash_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#tymethod.block_hash_ref\" class=\"fn\">block_hash_ref</a>(\n    &amp;self,\n    number: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get block hash by block number.</div></details></div></details>","DatabaseRef","forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-Debug-for-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ExtDB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;<div class=\"where\">where\n    ExtDB: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-Default-for-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ExtDB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;<div class=\"where\">where\n    ExtDB: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, ExtDB&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;<div class=\"where\">where\n    ExtDB: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-CacheDB%3CExtDB%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-CacheDB%3CExtDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ExtDB&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"forge/revm/db/struct.CacheDB.html\" title=\"struct forge::revm::db::CacheDB\">CacheDB</a>&lt;ExtDB&gt;<div class=\"where\">where\n    ExtDB: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","forge::backend::FoundryEvmInMemoryDB","forge::revm::InMemoryDB"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()