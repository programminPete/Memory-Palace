import React from 'react';

let dictionary = [
    { '00': [ 'susie', 'zoos', 'sues', 'sauce', 'assess', 'sissy', 'sassy' ] },
    { '01': [ 'suit', 'acid', 'seed', 'swat', 'sad' ] },
    { '02': [ 'sun', 'assign', 'snowy' ] },
    { '03': [ 'sumo', 'zoom', 'some', 'sam', 'sammy', 'awesome' ] },
    { '04': [ 'sore', 'czar', 'sara', 'sierra', 'sorrow', 'sorry' ] },
    { '05': [ 'soil', 'sell', 'slow', 'weasel' ] },
    { '06': [ 'sewage', 'switch', 'swishy', 'sage' ] },
    { '07': [ 'soak', 'sick', 'sack' ] },
    { '08': [ 'sofa', 'save', 'savvy' ] },
    { '09': [ 'soap', 'sob', 'sappy' ] },
    { '10': [ 'saute', 'autos', 'suite', 'iotas', 'daisy', 'tease', 'dizzy' ] },
    { '11': [ 'today','audio','toad','tidy','duet','date','audit','edit','tide','tattoo' ] },
    { '12': [ 'ton', 'don', 'tune', 'dun', 'donna', 'tuna', 'duet', 'den' ] },
    { '13': [ 'team', 'time', 'tame', 'tome', 'tomb', 'tom', 'tam', 'dome' ] },
    { '14': [ 'dairy', 'diary', 'adore', 'door', 'dear', 'deer', 'draw', 'dry' ] },
    { '15': [ 'delay','daily','yodel','ideal','duel','dual','deal','dale','tail','tall','tell' ] },
    { '16': [ 'teach','taj','dish','touche','douche','diss','tech','haute','tissue' ] },
    { '17': [ 'tack', 'tokay', 'tyke', 'teak', 'tiki', 'dog', 'take', 'thick' ] },
    { '18': [ 'tofu','dive','duff','tiff','defy','deaf','dave','davie','dove','diva','tivo','deaf' ] },
    { '19': [ 'tape','dab','tap','dip','utopia','adobe','dooby','tuba','deep' ] },
    { '20': [ 'uneasy','noisy','noise','nose','nosey','nas','anus','noose' ] },
    { '21': [ 'unite','nude','note','not','knot','sent','scent','need','kneed' ] },
    { '22': [ 'none', 'anyone', 'inane', 'union', 'nanny', 'noun', 'onion' ] },
    { '23': [ 'name', 'nomad', 'enemy', 'noma', 'enima', 'numb' ] },
    { '24': [ 'unary', 'nair', 'noir', 'nori', 'honour', 'winery' ] },
    { '25': [ 'nail', 'nile', 'neal', 'anole', 'noel', 'nil' ] },
    { '26': [ 'niche', 'nation', 'notion', 'nacho', 'enjoy', 'nudgy' ] },
    { '27': [ 'unyoke', 'enoki', 'nuke', 'onik', 'neck', 'knock', 'naggy' ] },
    { '28': [ 'unify', 'navy', 'naïve', 'nova', 'knife', 'envy' ] },
    { '29': [ 'nip','nap','nope','nape','knope','honeybee','nab','wannabe' ] },
    { '30': [ 'mase','muse','miss','mice','mace','maze','amaze','mouse','amuse','messy' ] },
    { '31': [ 'mute','mate','meat','meta','mate','moat','mat','meadow','mute' ] },
    { '32': [ 'mane','main','many','meany','money','amino','many','menu','mean','mine','omen','moon' ] },
    { '33': [ 'mom', 'mommy', 'mummy', 'mum', 'mime', 'myoma', 'memo' ] },
    { '34': [ 'more', 'mare', 'omar', 'mayor', 'moray', 'amour', 'mair', 'emir' ] },
    { '35': [ 'mile','miles','mule','mail','email','amole','meal','mole','maul' ] },
    { '36': [ 'much','mage','magi','mage','match','mash','mushy' ] },
    { '37': [ 'make','mike','moke','mocha','maggie','mick','mack','micky','mug','mock' ] },
    { '38': [ 'mofo', 'muff', 'move', 'movie', 'mauve', 'mave' ] },
    { '39': [ 'miopa', 'mob', 'mop', 'mopey', 'moppy', 'maybe', 'map', 'wimpy' ] },
    { '40': [ 'arouse','arise','rise','rous','rose','rosie','euros','rice','erase','rosy' ] },
    { '41': [ 'yard', 'rude', 'road', 'read', 'reed', 'ready' ] },
    { '42': [ 'rain', 'urine', 'rainy', 'rune', 'ruin', 'runny' ] },
    { '43': [ 'room','ream','rhyme','rim','REM','rimy','amir','ream','roam','rum','ram' ] },
    { '44': [ 'error', 'roar', 'rear', 'rory', 'aurora', 'rare' ] },
    { '45': [ 'rail', 'real', 'really', 'railway', 'rule', 'royal', 'ryan' ] },
    { '46': [ 'roach', 'reach', 'rich', 'ration', 'rage' ] },
    { '47': [ 'rag','rake','rocky','rake','rick','rook','ricky','reich','raku','rag' ] },
    { '48': [ 'roof', 'arrive', 'rough', 'ruff', 'roof', 'rave' ] },
    { '49': [ 'rope', 'wrap', 'ripe', 'rip', 'rib', 'rape', 'ruby', 'robes' ] },
    { '50': [ 'loose','louse','louise','louis','lose','lazy','lousy','loss' ] },
    { '51': [ 'lead', 'aloud', 'oiled', 'lady', 'loud', 'lude', 'elite' ] },
    { '52': [ 'alien','alone','lion','line','luna','loan','leen','lean','lein' ] },
    { '53': [ 'loom', 'lime', 'limo', 'lame', 'llama' ] },
    { '54': [ 'lair', 'lure', 'leery', 'laura', 'lorry' ] },
    { '55': [ 'lily', 'lull', 'loyal', 'lowly' ] },
    { '56': [ 'luge', 'leech', 'latch', 'lush', 'louche' ] },
    { '57': [ 'olive','leg','lick','lucky','luck','luke','leaky','leak','alike' ] },
    { '58': [ 'leaf', 'lava', 'love', 'leafy', 'life', 'lifeway', 'laugh' ] },
    { '59': [ 'lip', 'help', 'loop', 'lap', 'lab', 'lube', 'loopy' ] },
    { '60': [ 'cheese','chase','choose','ouches','jizz','jazz','jazzy','jay-z' ] },
    { '61': [ 'shit','shute','cheat','shady','sade','sheet','shout','shut','cheetah' ] },
    { '62': [ 'chin','shin','jin','jane','jean','join','chine','china','shiny','shine' ] },
    { '63': [ 'shame', 'chime', 'chum', 'jam', 'shim', 'sham', 'shamu' ] },
    { '64': [ 'chaire', 'chore', 'share', 'shore', 'shire', 'sure', 'assure' ] },
    { '65': [ 'chilli', 'chili', 'chill', 'jolly', 'chola', 'jules', 'julie' ] },
    { '66': [ 'cha-cha', 'judge', 'jewish', 'shoji' ] },
    { '67': [ 'chick', 'check', 'shaky', 'shake', 'choke' ] },
    { '68': [ 'chef','achieve','chief','chive','jive','juvy','jeff','shove','shave' ] },
    { '69': [ 'jeep', 'chop', 'cheap', 'chap', 'chip', 'chips', 'jap', 'gip' ] },
    { '70': [ 'goose', 'kiss', 'cosy', 'case', 'chaos', 'quiz', 'quasi' ] },
    { '71': [ 'quate', 'quit', 'kite', 'kid', 'kit', 'cat', 'kitty' ] },
    { '72': [ 'akin', 'kane', 'koan', 'kine', 'keno', 'queen', 'ken', 'kenny' ] },
    { '73': [ 'kim','cammy','cam','came','come','game','coma','comb' ] },
    { '74': [ 'car', 'kory', 'corey', 'kari', 'kyrie', 'kora', 'carry' ] },
    { '75': [ 'koala', 'quail', 'quill', 'kill', 'equal', 'cool' ] },
    { '76': [ 'cage', 'coach', 'catchy', 'quash' ] },
    { '77': [ 'cake', 'cook', 'quick', 'kayak', 'quicky', 'cookie' ] },
    { '78': [ 'cave', 'give', 'goofy', 'goof', 'cove', 'quaff', 'queef', 'agave' ] },
    { '79': [ 'quip', 'equip', 'cape', 'cab', 'cup', 'Kip', 'cobb', 'cob', 'coup' ] },
    { '80': [ 'fizz', 'phase', 'fuss', 'wives', 'waves', 'vase' ] },
    { '81': [ 'feet', 'feta', 'fiat', 'fate', 'fat', 'fade', 'fido' ] },
    { '82': [ 'faun','fawn','fine','ovine','vieny','vein','veiny','vain','vine' ] },
    { '83': [ 'fomo', 'foamy', 'foam', 'fame', 'fume' ] },
    { '84': [ 'fore','fairy','waiver','waver','foray','fiery','fire','fury','voyeur','ovary','ivory' ] },
    { '85': [ 'fool', 'foul', 'woeful', 'full', 'afoul', 'awful', 'fuel', 'feel' ] },
    { '86': [ 'fiji', 'fish','veggie' ] },
    { '87': [ 'fuck', 'fake', 'fique', 'fig', 'foggy' ] },
    { '88': [ 'fifa', 'viva', 'fave', 'phife', 'fife' ] },
    { '89': [ 'vibe', 'fob', 'fab', 'fap', 'vape', 'fib' ] },
    { '90': [ 'boss','oppose','busy','bossy','base','abuse','pies','pays','bays','buys','bus' ] },
    { '91': [ 'payout','pat','patty','bat','bad','opiet','patio','pouty','pout' ] },
    { '92': [ 'pine','pain','pane','bone','puny','piney','pony','piano','peon' ] },
    { '93': [ 'pam','puma','bum','bomb','bum','poem','beam','beamy','mabe','bam' ] },
    { '94': [ 'pour','poor','buyer','boar','bore','boring','pear','pair','payer','burr' ] },
    { '95': [ 'bool','pool','pail','pale','pal','bell','peel','blue','bail' ] },
    { '96': [ 'pooch','bush','peachy','peach','paige','pouch','patch','bushy' ] },
    { '97': [ 'epich','pick','pack','bike','poke','back','pecky','peck','puke' ] },
    { '98': [ 'beef', 'pave', 'puffy', 'poofy', 'poof', 'buff', 'biff', 'buffy' ] },
    { '99': [ 'poop','poopy','boop','pappa','papa','puppy','pipe','pop','baby' ] }
   ]

class Dropdown2 extends React.Component{

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleConfirmDropdownWords}>
                    <select id="dropdown" onChange={this.props.handleWordSelect} value={this.props.monthWord}>
                    
                        <option value="sumo">sumo</option>
                        <option value="sumo2">sumo2</option>
                        <option value="sumo2">sumo2</option>
                    </select>

                    <input id="submit" type="submit" value="Generate GIFs" />
                </form>
            </div>
        )
    }
}

//refactor so that this submit button is separate
//and so that four dropdowns can be generated

export default Dropdown2;